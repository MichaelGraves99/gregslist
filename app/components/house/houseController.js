//private
import HouseService from "./houseService.js";

let _hs = new HouseService()

function draw() {
    let template = ''
    _hs.Houses.forEach(h => {
        template += h.getTemplate()
    })
    document.getElementById('available-content').innerHTML = template
    document.getElementById('form-content').innerHTML = `
    <form onsubmit="app.controllers.houseController.addHouse(event)">
        <input type="number" name="bedrooms" placeholder="Bedrooms" required>
        <input type="number" name="bathrooms" placeholder="Bathrooms" required>
        <input type="number" name="levels" placeholder="Levels" required>
        <input type="number" name="year" placeholder="Year" required>
        <input type="text" name="description" placeholder="Description">
        <input type="number" name="price" placeholder="Price" required>
        <input type="url" name="imgUrl" placeholder="Image" required>
        <button type="submit">Submit</button>
    </form>
    `

}

//public
export default class HouseController {
    constructor() {
        _hs.addSubscriber('houses', draw)
    }

    addHouse(event) {
        event.preventDefault();
        let form = event.target
        let newHouse = {
            bedrooms: form.bedrooms.value,
            bathrooms: form.bathrooms.value,
            levels: form.levels.value,
            year: form.year.value,
            price: form.price.value,
            description: form.description.value,
            imgUrl: form.imgUrl.value
        }
        _hs.addHouse(newHouse)
        //Clears the form
        form.reset()
    }

    getHouses() {
        _hs.getApiHouses()
    }
    bid(id) {
        _hs.bid(id)
    }
    deleteHouse(id) {
        _hs.deleteHouse(id)
    }


}