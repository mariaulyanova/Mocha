const Calculator = require('../../app/Calculator');
const expect = require('chai').expect;


describe('Should multiply the parameters passed to it and return the product as a result', function () {
  let calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  it('Should return 8 when called with numbers 2 and 4', () => {
    expect(calculator.multiply(2, 4)).to.equal(8);
  });

  it('Should return -6 when called with numbers -2 and 3', () => {
    expect(calculator.multiply(-2, 3)).to.equal(-6);
  });

  it('Should return 0 when called with number 0', () => {
    expect(calculator.multiply(0)).to.equal(0);
  });

  it('Should return 1 when called with numbers 1, 1, and 1', () => {
    expect(calculator.multiply(1, 1, 1)).to.equal(1);
  });

  it('Should throw error when called with non-numeric arguments', () => {
    expect(() => calculator.multiply("2", 3)).to.throw('Invalid argument: all arguments must be numbers');
  });

  it('Should throw error when called with no arguments', () => {
    expect(() => calculator.multiply()).to.throw('No arguments provided');
  });

  it('Should return  144 when multiplying multiple positive numbers 1, 2, 3, 4 ,6', () => {
    expect(calculator.multiply(1, 2, 3, 4, 6)).to.eql(144);
  });

  it('Should return 0.000009 when called with 0.01, 0.3, 0.04, 0.5, 0.15', () => {
    expect(calculator.multiply(0.01, 0.3, 0.04, 0.5, 0.15)).to.eql(0.000009);
  });

  it('Should return -18 when called with negative numbers -1, -3, -6', () => {
    expect(calculator.multiply(-1, -3, -6)).to.be.equal(-18);
  });

  it('Should return 0 when called with 100 zeros', () => {
    const zeros = Array(100).fill(0);
    expect(calculator.multiply(...zeros)).to.equal(0);
  });

  it('Should return 0 when any number is multiplied by 0', () => {
    const numbersToTest = [0, 1, -1, 100, -100, 0.5, -0.5];

    numbersToTest.forEach(number => {
      expect(calculator.multiply(number, 0)).to.equal(0);
    });
  });

  it('Should return negative number when called with two negative numbers', () => {
    expect(calculator.multiply(-9, -8)).to.be.eql(-72);
  });

  it('Sould return 188 when called with 188', () => {
    expect(calculator.multiply(188)).to.eql(188);
  });

  afterEach(function () {
    calculator = null;
  });
});
