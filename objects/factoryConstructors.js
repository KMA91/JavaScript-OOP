// const circle = {}; // Object literal syntax

const circle = {
  radius: 1, //property
  location: {
    x: 1,
    y: 1,
  },
  draw: function() { // method
    console.log('draw');
  }
};

const circle2 = {
  radius: 2,
  location: {
    x: 2,
    y: 2,
  },
  draw: function() {
    console.log('draw');
  }
};

// Since the above is is redundant, we can use
// a factory function or constructor function


function createCircle(radius) { // factory function
  return {
    radius, // same key/value
    draw: function() {
      console.log('draw');
    }
  }
}

const factoryCircle = createCircle(1)

function Circle(radius) { // constructor function
  console.log('this=> ', this);
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }
  // return this; Not needed since this is
  // automatically returned with the 'new' operator
}

const circle3 = new Circle(1);
