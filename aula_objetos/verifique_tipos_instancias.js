const nome = "Dougals";
const idade = 47;
const maiorIdade = true;
const skills = ["design", "fotografia", "professor", "html", "css"]; //skills é proveniente de uma array, por isso é uma instância - entre chaves é um [array]

const pessoa = {
    nome: nome,
    idade: idade,
    maiorIdade: maiorIdade,
    skills: skills,
}

console.log(typeof nome); //typeof retorna o tipo da variável
console.log(typeof idade);
console.log(typeof maiorIdade);
console.log(typeof skills);
console.log(typeof pessoa);

console.log(skills instanceof Array); //isntanceof serve para verificar os tipos de instâncias