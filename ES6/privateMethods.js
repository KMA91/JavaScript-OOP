const _radius = Symbol();
const _draw = Symbol();

console.log(_radius === _draw); // will log false

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() { // Private method using symbol

  }
}

const c = new Circle(1);
// Will not usually use the below code
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);
