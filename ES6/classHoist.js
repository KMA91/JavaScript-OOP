// Function declaration
sayHello();
// This will be hoisted to the top
function sayHello() {
  console.log('hello');
}

sayGoodbye(); // This will error
// Function expression
// This will not be hoisted to the top
const sayGoodbye = function() {
  console.log('goodbye');
};

// Class declaration and class
//expressions ARE NOT HOISTED

// Class declaration
class Circle {

}

// Class expression
const Square = class {

};
