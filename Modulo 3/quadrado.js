class Objeto {
    constructor(altura, largura) {
        this.altura;
        this.largura;
    }

    get area() {
        return this.calculaArea()
    }

    calculaArea() {
        return this.altura * this.largura;
    }
}

const quadrado = new Objeto(10,10);

console.log(quadrado.area);