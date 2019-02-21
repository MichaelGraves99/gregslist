export default class Job {
  constructor(data) {
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.rate = data.rate
    this.hours = data.hours
    this.description = data.description || 'No Description Provided'
  }


  getTemplate() {
    return `
        <div class="card col-lg-3 col-md-6 col-sm-12">
            <div class="card-body">
                <h3 class="card-title cen">${this.company} </h3>
                <h3 class="card-title cen">${this.jobTitle} </h3>
                <h5 class="card-title">Pay Rate: ${this.rate} </h5>
                <h5 class="card-title">Hours:   ${this.hours} </h5>
                <p class="card-text">${this.description} </p>
                <button class="btn btn-danger" onclick="app.controllers.jobController.deleteJob('${this._id}')">Remove</button>
            </div>
        </div>`
  }
}