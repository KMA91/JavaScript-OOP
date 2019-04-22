class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log('parent move method');
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color)
    this.radius = radius;
    super.move(); // call parent move class
  }

  draw() {
    console.log('draw');
  }

  move() { // This will override parent move method
    console.log('child Move method');
  }
}

const c = new Circle('red', 1);
console.log(c);
c.move();
