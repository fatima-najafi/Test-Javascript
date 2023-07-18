class Calculator {
  constructor() {
    this.n1 = 0;
    this.n2 = 0;
  }

  add(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
    const sum = n1 + n2;
    return sum;
  }

  subtract(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
    const subtract = n1 - n2;
    return subtract;
  }

  multiply(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
    const mult = n1 * n2;
    return mult;
  }

  divide(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
    const divide = n1 / n2;
    return divide;
  }
}

module.exports = Calculator;
