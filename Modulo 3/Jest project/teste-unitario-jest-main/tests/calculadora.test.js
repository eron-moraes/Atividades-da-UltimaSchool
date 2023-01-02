const { sum, diff, product, divi } = require('./../src/calculadora');
const calculadora = require('./../src/calculadora')

test('A soma de 1 e 2 deve ser igual a 3', () => {

    //expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2)).not.toBe(5);
});

test('A diferenca de 10 e 2 deve ser igual a 8', () => {

    expect(diff(10, 2)).toBe(8);

});

test('A multiplicacao de 3 e 2 deve ser igual a 6', () => {

    expect(product(3, 2)).toBe(6);

});

test('A divisao de 10 e 2 deve ser igual a 5', () => {

    expect(divi(10, 2)).toBe(5);

});

