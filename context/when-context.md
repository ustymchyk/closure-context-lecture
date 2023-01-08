### When do we need a context

#### When we works with classes

```js
class Circle {
  #radius;

  constructor(radius) {
    this.#radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.#radius, 2);
  }

  getCircumference() {
    return 2 * Math.PI * this.#radius;
  }
}

const circle = new Circle(15);
console.log(circle.getArea());
```

#### When we works with function - constructors

```js
function Circle(radius) {
  this._radius = radius;
}

Circle.prototype.getCircumference = getCircumference;
Circle.prototype.getArea = getArea;

function getCircumference() {
  return 2 * Math.PI * this._radius;
}

function getArea() {
  return Math.PI * Math.pow(this._radius, 2);
}

const circle = new Circle(15);
console.log(circle.getArea());
```

- [Next](./prototypes-1.md)
- [Back](../readme.md)
