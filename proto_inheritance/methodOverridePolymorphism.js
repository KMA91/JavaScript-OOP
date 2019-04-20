function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

function Circle(radius) {
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
  console.log('overrided duplicate method');
}

const circle = new Circle(1, 'red');
console.log(c);
