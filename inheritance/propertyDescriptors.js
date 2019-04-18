let person = { name: 'Kevin' }

console.log(Object.keys(person)); // Only child keys will be shown. Prototype keys will not be shown.

let parentConstruct = Object.getPrototypeOf(person);
console.log(parentConstruct); // Returns prototype base of person

let descriptor = Object.getOwnPropertyDescriptor(parentConstruct, 'toString');
console.log(descriptor);

Object.defineProperty( person, 'name', {
  writable: false
})

person.name = "Steven";
console.log(person.name); // Name is not writable, so log will show 'Kevin'

Object.defineProperty( person, 'name', {
  enumerable: false
})

console.log(Object.keys(person)); // Name key is not shown

Object.defineProperty( person, 'name', {
  configurable: false
})

delete person.name;
console.log(person); // Name property will not be deleted
