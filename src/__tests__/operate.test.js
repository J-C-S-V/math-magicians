import operate from '../logic/operate';

describe('operate', () => {
  test('Adds two numbers', () => {
    expect(operate(1, 1, '+')).toBe('2');
  });

  test('Subtracts two numbers', () => {
    expect(operate(2, 3, '-')).toBe('-1');
  });

  test('Multiplies two numbers', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  test('Divides two numbers', () => {
    expect(operate(10, 2, '÷')).toBe('5');
  });

  test('Finds modulo of two numbers', () => {
    expect(operate(5, 3, '%')).toBe('2');
  });
  test('divides by 0', () => {
    expect(operate(10, 0, '÷')).toBe("Can't divide by 0.");
  });
});
