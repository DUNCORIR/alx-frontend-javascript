export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Using a Symbol to make the method non-enumerable
  [Symbol.for('cloneCar')]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  // Public method that internally calls the symbol method
  cloneCar() {
    return this[Symbol.for('cloneCar')]();
  }
}
