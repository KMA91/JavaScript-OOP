const _stack = new WeakMap();

class Stack {
  constructor(stack = []) {
    _stack.set(this, stack)
  }

  push(value) {
    _stack.get(this).push(value);
  }

  pop() {
    if(_stack.get(this).length === 0 )
      throw new Error('Stack is empty.');
    return _stack.get(this).pop();
  }

  peek() {
    if( _stack.get(this).length <= 0 )
    throw new Error('Stack is empty.');
    return _stack.get(this)[(_stack.get(this).length) - 1]
  }

  get count() {
    return _stack.get(this).length;
  }

}

const s = new Stack();
const s2 = new Stack([1, 2, 3]);
