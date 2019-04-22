function Circle(radius) {
  this.radius = radius;
}

function Square() {
  // ...
}

// Circle.prototype.duplicate = function() {
//   console.log('duplicate');
// }
//
// Square.prototype.duplicate = function() {
//   console.log('duplicate');
// }

// The above will go against DRY principle
// and is redudant code. As a solution, we
// will create a parent class that will

function Shape() {
  // ...
}

function Shape(radius) {
  this.radius = radius;
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

Circle.prototype = Object.create(Shape.prototype); // Create an object(Shape) to use as a prototype
Square.prototype = Object.create(Shape.prototype);



const circle = new Circle(1);
const square = new Square();

circle.duplicate();
square.duplicate();
