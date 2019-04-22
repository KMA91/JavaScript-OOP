class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance Method
  draw() {
    console.log('draw');
  }

  // Static Method - called by class directly
  // Create utlitity functions that
  // aren't tied ta a particular object
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}


const circle = Circle.parse('{"radius": 1}');
console.log(circle);
