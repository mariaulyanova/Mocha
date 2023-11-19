class Calculator {

  constructor() {
  }

  validateNumbers(...numbers) {
    if (numbers.some(num => typeof num !== 'number')) {
      throw new Error('Invalid argument: all arguments must be numbers');
    }
    if (numbers.length === 0) {
      throw new Error('No arguments provided');
    }
  }

  add(...numbers) {
    this.validateNumbers(...numbers);
    return numbers.reduce((acc, item) => acc + item, 0);
  }

  multiply(...numbers) {
    this.validateNumbers(...numbers);
    return numbers.reduce((acc, item) => acc * item, 1);
  }
}

module.exports = Calculator;
