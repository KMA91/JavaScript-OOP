// Parent HTMLelement should have:
// 1) a method, click
// 2) a prototype method, focus

function HTMLElement() {
  this.click = function() {
    console.log('click');
  }
}

HTMLElement.prototype.focus = function() {
  console.log('focus');
}

const htmlNew = new HTMLElement();
console.log(htmlNew);

// Child HTMLSelectElement should:
// 1) allow for an array for a parameter
// 2) if no argument is supplied, an empty array should be initialized
// 3) include a list property that equates to the parameter
// 4) include 2 methods, addItem and removeItem to remove/add to-from the list
// 5) extend Parent, HTMLElement

function HTMLSelectElement(items = []) {

  // HTMLElement.call(this, click);

  this.items = items;

  this.addItem = function(item) {
    this.items.push(item);
  }

  this.removeItem = function(item) {
    for( var i = 0; i < this.items.length; i++ ) {
      if( this.items[i] == item ){
        this.items.splice(i, 1);
      }
    }
  }
}

// HTMLSelectElement.prototype = Object.create(HTMLElement.prototype); // This will not include the click method
HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

const htmlnew1 = new HTMLSelectElement(['1', '2', '3']);
console.log(htmlnew1);
