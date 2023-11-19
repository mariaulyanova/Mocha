const Calculator = require('../../app/Calculator');
const expect = require('chai').expect;


describe('Should sum the parameters passed to it and return the sum as a result', function () {
  let calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  it('Should return 6 when called with numbers 2 and 4', () => {
    expect(calculator.add(2, 4)).to.be.equal(6);
  });

  it('Should return 4 when called with number 4', () => {
    expect(calculator.add(4)).to.equal(4)
  });

  it('Should return 0 when colled with numbers 1, -1', () => {
    expect(calculator.add(1, -1)).to.be.eql(0);
  });

  it('Should throw error when called with "1"', () => {
    expect(() => calculator.add("1")).to.throw('Invalid argument: all arguments must be numbers')
      .that.has.property('message', 'Invalid argument: all arguments must be numbers');
  });

  it('Should return "No arguments provided" when called with no arguments', () => {
    expect(() => calculator.add()).to.throw('No arguments provided');
  });

  it('Should return 16 when adding multiple positive numbers 1, 2, 3, 4 ,6', () => {
    expect(calculator.add(1, 2, 3, 4, 6)).to.eql(16);
  });

  it('Should return 1 when called with 0.01, 0.3, 0.04, 0.5, 0.15', () => {
    expect(calculator.add(0.01, 0.3, 0.04, 0.5, 0.15)).to.eql(1);
  });

  it('Should return -10 when called with negative numbers -1, -3, -6', () => {
    expect(calculator.add(-1, -3, -6)).to.be.equal(-10);
  });

  it('Should return 0 when called with 100 zeros', () => {
    const zeros = Array(100).fill(0);
    expect(calculator.add(...zeros)).to.equal(0);
  });

  it('Should throw error when called with non-numeric arguments', () => {
    expect(() => calculator.add("2", 3)).to.throw('Invalid argument: all arguments must be numbers');
  });

  it('Should return the correct sum when called with an array of numbers', () => {
    const numbersToSum = [0, 10, 30, 12, 18, 0.5, -0.5, -20, 50];

    const sum = calculator.add(...numbersToSum);

    expect(sum).to.equal(100);
  });

  afterEach(function () {
    calculator = null;
  });
});
