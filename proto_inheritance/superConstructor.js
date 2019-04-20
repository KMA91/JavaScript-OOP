function Shape(color) {
  this.color = color;
}

function Circle(radius, color) {
  this.radius = radius;
}

function Square(color) {
  this.color = color;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Object.create(Shape.prototype);
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Object.create(Shape.prototype);

// Intermediate Function Inheritance
// This will encapsulate logic of extending
// parent and setting the constructor
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

extend(Circle, Shape);
extend(Square, Shape);

const circle = new Circle(1, 'red');
console.log(circle); // Circle will not have the parent 'color' property

// To include the parent property, we have to call the super constructor

function Circle(radius, color) {
  // Call the super constructor
  // 1st param is the object to be used as current object, 2nd param is the properties from new object to be inherited
  Shape.call(this, color);
  this.radius = radius;
}

const circle2 = new Circle(1, 'red');
console.log(circle2);

// ES6 way

class ES6Shape {
  constructor(color){
    this.color = color;
  };
}

class ES6Circle extends ES6Shape {
  constructor(radius, color){
    super();
    this.radius = radius;
    this.color = color;
  }

}

// We do not need to set the constructor
// since extends does this for us already

const circle3 = new ES6Circle(1, 'red');
console.log(circle3);
