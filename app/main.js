import CarController from "./components/carController.js";
import HouseController from "./components/houseController.js";



class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      houseController: new HouseController()
    }
  }
}



window.app = new App()