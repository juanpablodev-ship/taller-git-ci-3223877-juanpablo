const suma = require('../src/app');

test('suma de 1 + 2 es 3', () => {
    expect(suma(1, 2)).toBe(3);
});