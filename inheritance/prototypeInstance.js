function Circle(radius) {
  this.radius = radius; // Instance member
}

// Prototype member
Circle.prototype.draw = function() {
  console.log('draw');
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

Circle.prototype.toString = function() { // This will override parent method
  return 'Circle with radius ' + this.radius;
}

console.log(circle1.toString());

console.log(Object.keys(circle1)); // This will only print instance members

for (let key in circle1) // This will print both instance and prototype members
  console.log(key);
