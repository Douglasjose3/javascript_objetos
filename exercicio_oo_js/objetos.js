function Contatos(nome, cpf, endereco, telefone) {
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.telefone = telefone;
}

function Empresa(nome, cpf, endereco, telefone, cnpj, razaoSocial, endereco, capitalSocial, quantosFuncionarios, espacoFisico) {
    this.cnpj = cnpj;
    this.razaoSocial = razaoSocial;
    this.endereco = endereco;
    this.capitalSocial = capitalSocial;
    this.quantosFuncionarios = quantosFuncionarios;
    this.espacoFisico = espacoFisico;

    Contatos.call(this, nome, cpf, endereco, telefone);
}

const contatoEmpresaMark = new Contatos("Fulano", "000.000.000-00", "Nome da rua, x - Bairro - Cidade - CEP", "(11) 90000-0000");
const mark = new EmpresaMkt("Fulano", "000.000.000-00", "Nome da rua, x - Bairro - Cidade - CEP", "(11) 90000-0000", "000.000.000/0001-00", "Mark", "Nome da rua, x - Bairro - Cidade - CEP", 100000, 20, "sim");

console.log(mark);