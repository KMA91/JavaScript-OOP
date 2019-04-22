const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    // ES5 getter/setter
    Object.defineProperty(this, 'radius', {
      get: function() {
        return _radius.get(this);
      },
      set: function(radius) {
        _radius.set(this, radius)
      }
    })

  }

  // ES6 getter/setter
  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error('Radius cannot be less than 0')
    _radius.set(this, value)
  }
}

const circle = new Circle(1);
console.log(circle.radius);
circle.radius = 10;
console.log(circle.radius);
