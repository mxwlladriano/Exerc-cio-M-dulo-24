function Veiculo(marca, modelo, ano, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
}

Veiculo.prototype.descricao = function() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`;
}

function Carro(marca, modelo, ano, cor, numPortas) {
    Veiculo.call(this, marca, modelo, ano, cor);
    this.numPortas = numPortas;
}

Carro.prototype = Object.create(Veiculo.prototype);
Carro.prototype.constructor = Carro;

Carro.prototype.descricao = function() {
    return `${Veiculo.prototype.descricao.call(this)}, Carro - Número de Portas: ${this.numPortas}`;
}

function Moto(marca, modelo, ano, cor, cilindradas) {
    Veiculo.call(this, marca, modelo, ano, cor);
    this.cilindradas = cilindradas;
}

Moto.prototype = Object.create(Veiculo.prototype);
Moto.prototype.constructor = Moto;

Moto.prototype.descricao = function() {
    return `${Veiculo.prototype.descricao.call(this)}, Moto - Cilindradas: ${this.cilindradas}`;
}

function JetSki(marca, modelo, ano, cor, potencia) {
    Veiculo.call(this, marca, modelo, ano, cor);
    this.potencia = potencia;
}

JetSki.prototype = Object.create(Veiculo.prototype);
JetSki.prototype.constructor = JetSki;

JetSki.prototype.descricao = function() {
    return `${Veiculo.prototype.descricao.call(this)}, Jet Ski - Potência: ${this.potencia}`;
}

const veiculo1 = new Veiculo("Ford", "Focus", 2020, "Prata");
const jetSki1 = new JetSki("Sea-Doo", "Spark", 2022, "Azul", "90hp");
const moto1 = new Moto("Honda", "CBR 1000RR", 2021, "Vermelho", 1000);

console.log(veiculo1.descricao());
console.log(moto1.descricao());
console.log(jetSki1.descricao());



