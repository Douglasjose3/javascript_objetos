const nome = "Dougals";
const idade = 47;
const maiorIdade = true;
const skills = ["design", "fotografia", "professor", "html", "css"]; //skills é proveniente de uma array, por isso é uma instância - entre chaves é um [array]

const pessoa = { //pessoa é um objeto
    nome: nome, //atributo
    idade: idade, //atributo
    maiorIdade: maiorIdade, //atributo
    skills: skills, //atributo
}

//notação ponto (variavel.propriedade) e.g. console.log(variavel.propriedade)
console.log(pessoa.nome);

//outra maneira para acessar o atributo
console.log(pessoa['nome']);

//atributo dinâmico
function exibeAtributo(nomeAtributo) { 
    console.log(pessoa[nomeAtributo]) //[argumento da função]
}

exibeAtributo('nome'); //envocar a função

pessoa.sobrenome = 'rodrigues'; //conseguimos mudar o atributo de uma const
pessoa['sobrenome'] = 'rodrigues'; 

//para não mudar o atributo de uma const, consegue congelar o objeto
Object.freeze(pessoa); //acessando a função construtora de um ojbjeto
pessoa.nome = 'Murilo'; //
console.log(pessoa.nome);

//para verificar se um atributo existe em um elemento
if (pessoa.sobrenome) { //não entrou pq esse atributo não existe
    console.log("a pessoa tem sobrenome");
}

if (pessoa['sobrenome']) { //q const é imutável os atributos dentro dela são mutáveis
    console.log("a pessoa tem sobrenome");
}

//sempre verifica se o atributo não é null nem undefined, se for um dos casos ele não aceita

//verificando se o atributo é nul ou undefined
if ('sobrenome' in pessoa) { //in significa em atributo
    console.log('tem sobrenome');
}


//podemos transformar os atributos em arrays com o nome dos atributos
Object.keys(pessoa); //útil para saber a quantidade de propriedades que existe em um objeto
console.log(Object.keys(pessoa)); 
console.log(Object.keys(pessoa).length); 

//transformar os valores das propriedades em um array
console.log(Object.values(pessoa));