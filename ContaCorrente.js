import {client} from "./Cliente.js";
export class contacorrente{
    static numerodecontas = 0               //static serve para não deixar a variavel ser instanciada por cada conta, mas sim, manter o numero
    agencia;                                //sempre que alguma for criada! (sem ficar criando novos totais pra essa var.)
    _client;
    _saldo = 0;


    set client(novovalor){                  // client = [qualquer coisa exceto "client1,2,3,4..."] == UNDEFINED!
        if(novovalor instanceof client){
        this._client = novovalor;
        }
    }

    get client(){                           // comando usado para pegar o cliente digitando apenas "client" e não "_client"
        return this._client
    }

    get saldo(){                            // pegar o valor _saldo, e como só tem o getter, eu não posso atribuir valores a "saldo"(conta1.saldo = valor)
        return this._saldo                  // caso tente, (TypeError: Cannot set property saldo of #<contacorrente> which has only a getter)
    }

    constructor(agencia, client){
        this.agencia = agencia;             
        this._client = client;
        contacorrente.numerodecontas++;              //posso usar o cessor set dentro da própria classe se eu quiser fazer a verificação
    }

//////////////////////////////////////////////////////////////////////////////////////

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
       } 
    }

    transferencia(valor, conta){
        const valorsacado = this.sacar(valor);
        conta.depositar(valorsacado);
    }
}