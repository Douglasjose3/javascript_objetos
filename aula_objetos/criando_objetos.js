//criando obejtos literiais
const carroMurilo1 = {
    modelo: 'GT',
    fabricante: 'Convert',
    anoModelo: 2024,
    anoFabricacao: 2024,
}

const motoDouglas1 = {
    modelo: '1250 GS',
    fabricante: 'BMW',
    anoModelo: 2024,
    anoFabricacao: 2024,
}

//criando objetos contrutures
function Carro(modelo, fabricante, anoModelo, anoFabricacao) { 
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

function Moto(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

const carroMurilo = new Carro("GT", "Convertt", "2024", "2024"); //palavra NEW serve para chamar o carro
const motoDouglas = new Moto("1250 GS", "BMW", "2024", "2024"); //motoDouglas ou carroMurilo é proveniente de um construtor, por isso é uma instância

console.log(carroMurilo);
console.log(motoDouglas);