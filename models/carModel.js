
class CarModel {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  present = () => {
    return `made in ${this.year} by ${this.brand} and the model is ${this.model}`;
  }
}

export default CarModel;
  