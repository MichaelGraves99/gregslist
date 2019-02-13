import House from "../models/house.js";

//PRIVATE
let _state = {
  house: [
    new House({ price: 249900, title: 'Great location', img: 'https://img-aws.ehowcdn.com/877x500p/photos.demandstudios.com/getty/article/108/23/167684921.jpg', description: "Yeah! it's a sod house", location: 'Kuna, Idaho' }),
    new House({ price: 879900, title: 'Looking for space', img: 'https://www.gannett-cdn.com/-mm-/cc9b9306bcc485f7742aa512591c882360204bab/c=5-0-4027-3024/local/-/media/2018/04/19/Westchester/Westchester/636597471914921959-IMG-7245.JPG?width=534&height=401&fit=crop', description: 'Lots of rooms and character', location: 'Eagle, Idaho' }),
    new House({ price: 351800, title: 'Going fast', img: 'https://i.pinimg.com/originals/cb/ea/50/cbea505d238132f16cdebcd5789536ab.jpg', description: '', location: 'Meridian, Idaho, Idaho' })
  ]
}

let _subscribers = {
  house: []
}


function setState(dataName, value) {
  _state[dataName] = value
  _subscribers[dataName].forEach(fn => fn());
}

//PUBLIC
export default class HouseService {

  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }
  get House() {
    return _state.house
  }
  addHouse(rawHouse) {
    let newHouse = new House(rawHouse)
    _state.house.push(newHouse)
    setState('house', _state.house)
  }
  deleteHouse(id) {
    for (let i = 0; i < _state.house.length; i++) {
      let house = _state.house[i];
      if (house.id == id) {
        _state.house.splice(i, 1)
        break;
      }
    }
    setState('house', _state.house)
  }
}