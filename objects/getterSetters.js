function Circle(radius) {
  this.radius = radius;

  let defaultLocation = {x: 0, y: 0};

  let computeLocation = function(){
    console.log(defaultLocation);
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function() { // Getter
      return defaultLocation;
    },
    set: function(value) {
      if(!value.x || !value.y)
        throw new Error('Invalid Location Values');
      defaultLocation = value;
    }
  });
}

const circle = new Circle(1);
console.log(circle);
console.log(circle.defaultLocation);
// circle.defaultLocation = 1; // <== error
circle.defaultLocation = {x: 1, y: 1};
console.log(circle.defaultLocation);
