class Circle {
  #radius;

  constructor(radius) {
    this.#radius = radius;
  }

  get area() {
    return Math.PI * Math.pow(this.#radius, 2);
  }

  get circumference() {
    return 2 * Math.PI * this.#radius;
  }
}

const circle = new Circle(15);

console.log(circle.area);
