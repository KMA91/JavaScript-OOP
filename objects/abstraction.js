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

const circle = new Circle(1);
circle.location = false; // This can change the intended value
circle.draw();

// The solution to this is to use abstraction. Hide properties/methods
// we do not want other objects to have access to alter

function Circle(radius) {
  this.radius = radius;
  let location = {x: 1, y: 1}; // private method using let

  let computeLocation = function(){
    console.log(this.location);
  }

  this.draw = function(){
    computeLocation(); // this is removed since the new object does not have method
    console.log('draw');
  }
}

const circle = new Circle(1);
circle.draw();
