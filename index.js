import {client} from "./Cliente.js"
import {contacorrente} from "./ContaCorrente.js"

//////////////////////////////////////////////////////////////////////////////////////

const client1 = new client("Ricardo", 1122233309);    //como foi colocado um construtor na classe conta corrente,
//client1.name ="Ricardo";                            // eu não posso mais atribuir valores da maneira tradicional de uma variável
//client1.cpf =11122233309;                           // apenas colocando as informações dentro do parenteses

const client2 = new client("Ana", 1112223339);
//client2.name ="Ana";
//client2.cpf = 11122223339;

////////////////////////////////////////////////////////////////////////////////////////
const conta1 = new contacorrente(1001, client1);
const conta2 = new contacorrente(1001, client2);

///////////////////////////////////////////////////////////////////////////////////////////

console.log(contacorrente.numerodecontas)