let id = 1

export default class House {
  constructor(data) {
    this.id = id
    this.price = data.price
    this.title = data.title
    this.img = data.img
    this.location = data.location
    this.description = data.description || 'No Description Provided'
    id++
  }

  getTemplate() {
    return `
        <div class="card col-3">
            <img class="card-img-top" src="${this.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.description} -- ${this.price}</p>
                <p class="card-text">${this.location}</p>
                <button onclick="app.controllers.houseController.deleteHouse(${this.id})">Remove</button>
            </div>
        </div>`
  }
}