import HouseService from "./houseService.js";
//Private
let _hs = new HouseService()

function draw() {
  let house = _hs.House
  let template = ''
  house.forEach(house => {
    template += house.getTemplate()
  });
  document.getElementById('available-house').innerHTML = template
}

function logHouse() {
  console.log("house UPDATED!!!")
}

//Public
export default class HouseController {
  constructor() {
    _hs.addSubscriber('house', draw)
    _hs.addSubscriber('house', logHouse)
    draw()
  }

  //IN ANY FORM SUBMISSION DO NOT FORGET TO PREVENT THE DEFAULT ACTION
  addHouse(event) {
    event.preventDefault();
    let form = event.target
    let newHouse = {
      title: form.title.value,
      price: form.price.value,
      description: form.description.value,
      img: form.img.value,
      location: form.location.value
    }
    _hs.addHouse(newHouse)
    //Clears the form
    form.reset()
  }
  deleteHouse(id) {
    _hs.deleteHouse(id)
  }
}