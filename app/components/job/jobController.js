//private
import JobService from "./jobService.js";

let _js = new JobService()

function draw() {
  let template = ''
  _js.Jobs.forEach(h => {
    template += h.getTemplate()
  })
  document.getElementById('available-content').innerHTML = template
  document.getElementById('form-content').innerHTML = `
    <form onsubmit="app.controllers.jobController.addJob(event)">
        <input type="number" name="company" placeholder="Colmpany" required>
        <input type="number" name="jobTitle" placeholder="Job Title" required>
        <input type="number" name="rate" placeholder="Pay Rate" required>
        <input type="number" name="hours" placeholder="Hours" required>
        <input type="text" name="description" placeholder="Description">
        <button type="submit">Submit</button>
    </form>
    `
}


//public
export default class JobController {
  constructor() {
    _js.addSubscriber('jobs', draw)
  }

  addJob(event) {
    event.preventDefault();
    let form = event.target
    let newHouse = {
      company: form.company.value,
      JobTitle: form.JobTitle.value,
      rate: form.rate.value,
      hours: form.hours.value,
      description: form.description.value,
    }
    _js.addJob(newJob)
    //Clears the form
    form.reset()
  }

  getJobs() {
    _js.getApiJobs()
  }
  deleteJob(id) {
    _js.deleteJob(id)
  }
}