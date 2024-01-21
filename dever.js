
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    dirigir() {
        console.log(`${this.marca} ${this.modelo} está  sendo dirigido`);
    }
}


class Carro extends Veiculo {
    constructor(marca, modelo, cor) {
        super(marca, modelo);
        this.cor = cor;
    }

    tetosolar() {
        console.log(`${this.marca} ${this.modelo} o teto solar esta abrindo.`);
    }
}

class Bicicleta extends Veiculo {
    constructor(marca, modelo, engrenagens) {
        super(marca, modelo);
        this.engrenagens = engrenagens;
    }

    marcha(engrenagens) {
        console.log(`${this.marca} ${this.modelo} a marcha é a ${engrenagens}.`);
    }
}


const carros = new Carro('Toyota Yaris', 'XLS', 'Branco');
const bicicletas = new Bicicleta('nathor', 'Violet', 18);
const veiculo = new Veiculo('Volkswagem', 'Gol');

carros.dirigir();
carros.tetosolar();
bicicletas.dirigir();
bicicletas.marcha(2);

veiculo.dirigir();


