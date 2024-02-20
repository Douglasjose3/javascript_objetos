function Contatos(nome, cpf, endereco, telefone) {
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.telefone = telefone;
}

function Mapeamento(nome, cpf, endereco, telefone, contasAPagar, contasAReceber, quantasNotasEmite, temCartaoDeCredito) {
    this.contasAPagar = contasAPagar;
    this.contasAReceber = contasAReceber;
    this.quantasNotasEmite = quantasNotasEmite;
    this.temCartaoDeCredito = temCartaoDeCredito;

    Contatos.call(this, nome, cpf, endereco, telefone);
}

function Empresa(cnpj, razaoSocial, capitalSocial, quantosFuncionarios, espacoFisico, contasAPagar, contasAReceber, quantasNotasEmite, temCartaoDeCredito) {
    this.cnpj = cnpj;
    this.razaoSocial = razaoSocial;
    this.capitalSocial = capitalSocial;
    this.quantosFuncionarios = quantosFuncionarios;
    this.espacoFisico = espacoFisico;

    Mapeamento.call(this, contasAPagar, contasAReceber, quantasNotasEmite, temCartaoDeCredito);
}

const contatoEmpresaMark = new Contatos("Fulano", "000.000.000-00", "Nome da rua, x - Bairro - Cidade - CEP", "(11) 90000-0000");
const mapeamentoMark = new Mapeamento("Fulano", "000.000.000-00", "Nome da rua, x - Bairro - Cidade - CEP", "(11) 90000-0000", 150, 40, 40, "sim");
const empresaMark = new Empresa("000.000.000/0001-00", "Mark", 100000, 20, "sim", "Fulano", "000.000.000-00", "Nome da rua, x - Bairro - Cidade - CEP", "(11) 90000-0000");



console.log(empresaMark);