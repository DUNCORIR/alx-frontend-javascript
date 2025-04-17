import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  // Override cloneCar to return a Car instance (not EVCar)
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
