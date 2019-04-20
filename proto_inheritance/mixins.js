const canEat = {
  eat: function() {
    console.log('I can eat');
  }
}

const canWalk = {
  walk: function() {
    console.log('I can walk');
  }
}

const canSwim = {
  swim: function() {
    console.log('I can swim');
  }
}

function Fish(){}
function Person(){}

Object.assign(Fish.prototype, canEat, canSwim);
Object.assign(Person.prototype, canEat, canWalk);

function mixin(target, ...source) {
  Object.assign(target, ...source);
}

mixin(Fish.prototype, canSwim, canEat);
mixin(Person.prototype, canWalk, canSwim);

const goldfish = new Fish();
const guy = new Person();
console.log(goldfish);
console.log(guy);
