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

  this.render = function() {
    let returnEl = "<select>\n";
    for( var i = 0; i < this.items.length; i++ ) {
      returnEl += '  <option>' + (this.items[i].toString()) + '</option>\n';
    }
    returnEl += '</select>';
    return returnEl;

    // ES6
    return `<select>${this.items.map(item => `
      <option>${item}</option>`).join('')}\n</select>`;
  }
}

// HTMLSelectElement.prototype = Object.create(HTMLElement.prototype); // This will not include the click method
HTMLSelectElement.prototype = new HTMLElement(); // This will include the click method
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

const htmlnew1 = new HTMLSelectElement(['1', '2', '3']);
console.log(htmlnew1);

function HTMLImageElement(source = undefined) {
  this.src = source;

  this.render = function() {
    return "<img src='" + this.src + "' />"
    return `<img src="${this.src}" />`; // ES6 template string - allows for passing argument into string
  }
}

HTMLImageElement.prototype = new HTMLElement();
HTMLImageElement.prototype.constructor = HTMLImageElement;

const htmlnew2 = new HTMLImageElement();
console.log(htmlnew2);

const elements = [
  new HTMLSelectElement([1, 2, 3]),
  new HTMLImageElement('http://')
];

for (let element of elements)
  console.log(element.render());
