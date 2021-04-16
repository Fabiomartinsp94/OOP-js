export class client {
    name;
    _cpf;
    get cpf (){
        return this._cpf;
    }

    constructor(nome, cpf){                 //usado para que eu não possa alterar as variáveis após a criação do cliente.
        this.name = nome;
        this._cpf = cpf;    
    }

}