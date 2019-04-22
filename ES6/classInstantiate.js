// ES5

// function Circle(radius) {
//   this.radius = radius;
//
//   this.draw = function() {
//     console.log('draw');
//   }
// }

// ES6

class Circle {
  constructor(radius) { // Used to initialize objects
    // Variables and methods will be availble within the class
    this.radius = radius;
  }
  // Methods below exist in prototype
  draw() {
    console.log('draw');
  }
}

const circle = new Circle(1);
console.log(circle);
circle.draw();
