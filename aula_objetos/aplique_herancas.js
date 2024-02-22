/*/funcionário
function Pessoa(nome) { //instância/abstração de pessoa
    this.nome = nome;
    this.dizOi = function() { //metodo
        console.log(this.nome + " diz! olá, tudo bem por aí?");
    }
}

function Funcionario(nome, cargo, salario) { //instância de funcionário ---- atribuir as informações do Funcionário a Pessoa precisamos tratar a herança.
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
}

const pessoa1 = new Pessoa("Maria"); //atribui o nome Maria para a instância Pessoa
const funcionário1 = new Funcionario("Maria", "Front-end", "R$5.000,00");
pessoa1.dizOi(); //evocando o metodo

console.log(pessoa1);
console.log(funcionário1); */


//cadastro de funcionários
function Pessoa(name, nacionalidade, idade) { //instância/abstração de pessoas
    this.name = name;
    this.nacionalidade = nacionalidade;
    this.idade = idade;
}

function Funcionario(name, nacionalidade, idade, cargo, skills, salário, admissão) { //instIancia/abstração de funcionários
    this.cargo = cargo;
    this.skills = skills;
    this.salário = salário;
    this.admissão = admissão;

    Pessoa.call(this, name, nacionalidade, idade);
}

function Gerente(name, nacionalidade, idade, cargo, skills, salário, admissão, departamento, equipe) {
    this.departamento = departamento;
    this.equipe = equipe;

    Pessoa.call(this, name, nacionalidade, idade);
    this.cargo = cargo;
    this.skills = skills;
    this.salário = salário;
    this.admissão = admissão;
}
const douglasPessoa = new Pessoa("Douglas Rodrigues José", "Brasileiro", "47 anos");
const douglasFuncionario = new Funcionario("Douglas Rodrigues José", "Brasileiro", "47", "Engenheiro front-end", "Designer, Fotógrafo, Professor de fotografia", 30000, "05-05-2024");
const douglasGerente = new Gerente("arte", 20);

console.log(douglasPessoa);
console.log(douglasFuncionario);
console.log(douglasGerente);