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
        <input type="text" name="company" placeholder="Company" required>
        <input type="text" name="jobTitle" placeholder="Job Title" required>
        <input type="number" name="rate" placeholder="Pay Rate" required>
        <input type="number" name="hours" placeholder="Hours" required>
        <input type="text" name="description" placeholder="Description">
        <button class="btn btn-primary" type="submit">Submit</button>
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
    let newJob = {
      company: form.company.value,
      jobTitle: form.jobTitle.value,
      rate: form.rate.value,
      hours: form.hours.value,
      description: form.description.value
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