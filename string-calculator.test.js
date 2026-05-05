const sumar = require('./string-calculator');

// test 1
test('string vacío retorna 0', () => {
  expect(sumar('')).toBe(0);
});

// test 2
test('un número retorna ese número', () => {
  expect(sumar('1')).toBe(1);
  expect(sumar('5')).toBe(5);
});

// test 3
test('dos números separados por coma se suman', () => {
  expect(sumar('1,2')).toBe(3);
});

// test 4
test('múltiples números separados por coma se suman', () => {
  expect(sumar('1,2,3')).toBe(6);
});

// test 5
test('acepta salto de línea como separador', () => {
  expect(sumar('1\n2,3')).toBe(6);
});

// test 6
test('lanza error con un negativo', () => {
  expect(() => sumar('-1,2')).toThrow('no se permiten negativos: -1');
});

test('lanza error listando todos los negativos', () => {
  expect(() => sumar('-1,-2')).toThrow('no se permiten negativos: -1, -2');
});