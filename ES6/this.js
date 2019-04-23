// 'use strict'; <== This will log undefined when logging the window/global object

// const Circle = function() {
//   this.draw = function() {
//     console.log(this);
//   }
// }

class Circle { // This will be created in strict mode
  draw() {
    console.log(this);
  }
}

const c = Circle();
// Method call
// This will log the circle object
c.draw();

const draw = c.draw;
// Function call
// This will log the window/global object
draw();
