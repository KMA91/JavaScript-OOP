function Circle(radius) {
  this.radius = radius;
  this.location = {x: 1, y: 1};

  this.draw = function(){
    this.computeLocation();
    console.log('draw');
  }

  this.computeLocation = function(){
    console.log(this.location);
  }
}

const circle1 = new Circle(1);
circle1.location = false; // This can change value and cause side effects
circle1.draw();

// The solution to this is to use abstraction. Hide properties/methods
// we do not want other objects to have access to alter

function Circle(radius) {
  this.radius = radius;
  let location = {x: 1, y: 1}; // private method using let

  let computeLocation = function(){
    console.log(location); // 'this' keyword is removed since the new object does not include the variable publicly
  }

  this.draw = function(){
    computeLocation(); // 'this' keyword is removed since the new object does not include the method publicly
    console.log('draw');
  }
}

const circle2 = new Circle(1);
circle2.draw();
