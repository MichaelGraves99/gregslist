import Job from "../../models/job.js";

//private

let _api = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api'
})

let _state = {
  jobs: []
}

let _subscribers = {
  jobs: []
}

function setState(prop, value) {
  _state[prop] = value
  _subscribers[prop].forEach(fn => fn());
}


//public
export default class JobService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Jobs() {
    return _state.jobs.map(h => new Job(h))
  }



  getApiJobs() {
    _api.get('jobs')
      .then(res => {
        let data = res.data.data.map(h => new Job(h))
        setState('jobs', data)
      })
  }

  addJob(rawJob) {
    let newJob = new Job(rawJob)
    _api.post('jobs', newJob)
      .then(res => {
        this.getApiJobs()
      })
  }

  deleteJob(id) {
    _api.delete('Jobs/' + id)
      .then(res => {
        this.getApiJobs()
      })
  }



}