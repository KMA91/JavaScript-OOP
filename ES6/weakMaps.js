// Weakmap is a dictionary where keys are objects and values can be anything
// keys are weak
const _radius = new WeakMap();
const _radiusAgain = new WeakMap();

console.log(_radius);

class Circle {
  constructor(radius) {
    _radius.set(this, radius); // key, value

    // This will be undefined as it targets the global object
    // _radiusAgain.set(this, function() {
    //   console.log('radius again', this); // 'this' will be undefined as it targets the global object
    // })

    // As a solution, we will use the arrow function
    // 'this' will now inherit from the constructor function
    _radiusAgain.set(this, () => {
      console.log('private');
      console.log('radius again', this); // 'this' will be inherited from the constructor object
    })

  }

  returnPrivateRadius() {
    return _radius.get(this);
  }

  returnPrivateRadiusMethod() {
    return _radiusAgain.get(this)();
  }
}

const c = new Circle(1);
console.log(c); // Radius property will not be included
console.log(c.returnPrivateRadius());
console.log(c.returnPrivateRadiusMethod());
