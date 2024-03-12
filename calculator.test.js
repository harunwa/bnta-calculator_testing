const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 500000;
    actual = sum(400000, 100000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -50;
    actual = sum(-24, -26);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 0;
    actual = sum(0, 0);
    expect(actual).toBe(expected);
  });

describe('subtract', () => {
  test('can subtract two numbers', () => {
  expected = 6;
  actual = subtract(10, 4);
  expect(actual).toBe(expected);
    }
  )
});

describe('multiply', () => {
  test('can multiply two numbers', () => {
    expected = 100;
    actual = multiply(25, 4);
    expect(actual).toBe(expected);
      }
    )
});

describe('divide', () => {
  test('can divide two numbers', () => {
    expected = 10;
    actual = divide(100, 10);
    expect(actual).toBe(expected);
      }
    )
});

describe('modulus', () => {
  test('can locate the modulus of a number', () => {
    expected = 0;
    actual = modulus(100, 10);
    expect(actual).toBe(expected);
      }
    )
});

describe('even', () => {
  test('can check if a number is even', () => {
    expected = false;
    actual = even(11);
    expect(actual).toBe(expected);
      }
    )
});

describe('odd', () => {
  test('can check if a number is odd', () => {
    expected = true;
    actual = odd(99);
    expect(actual).toBe(expected);
      }
    )
});
});