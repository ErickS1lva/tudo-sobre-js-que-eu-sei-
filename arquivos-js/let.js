alert("Eu sou JavaScript!")
//comentario uma linha
/*
comentario 
bloco
*/


//Variaveis

let message;
message = 'Hello';
alert(message);

//ou

let message2 = 'Hello';
alert(message2);

//ou

let user = 'jhon', age = 25, message3 = 'hello';

//ou

let user2 = 'jhon';
let age2 = 25;
let message4 = 'hello';

//ou 

let user3 = 'jhon',
    age3 = 25,
    message5= 'world';

//ou

let user4 = 'jhon'
    , age4 = 25
    , message6 = 'world';

/*Em scripts mais antigos, você também pode encontrar 
 outra palavra-chave: var em vez de let*/

var message7 = 'Hello';

/*Uma analogia da vida real:
Podemos compreender facilmente o conceito de "variável" se a imaginarmos
como uma "caixa" para dados, com um adesivo de nome único colado nela.

Por exemplo, a variável messagepode ser imaginada como uma caixa
etiquetada "message"com o valor "Hello!"dentro dela:

Podemos colocar qualquer valor na caixa.

Também podemos alterá-lo quantas vezes quisermos:*/

let message8;
message8 = 'hello';
mensage8 = 'world';//valor mudou de hello para word
alert(mensage8);

/*Também podemos declarar duas variáveis ​​
e copiar dados de uma para a outra.*/

let hello = 'oi mundo';
let message9;
message9 = hello //agora message9 recebe hello

alert(hello);
alert(message9);

/*Declarar duas vezes gera um erro.
Uma variável deve ser declarada apenas uma vez.

A declaração repetida da mesma variável é um erro:


let message10 = 'isso';
let message10 = 'aquilo';  SyntaxError: 'message' has already been declared
alert(message10);
*/

/*Nomeação de variáveis
Existem duas limitações para nomes de variáveis ​​em JavaScript:

O nome deve conter apenas letras, dígitos ou os símbolos $e _.
O primeiro caractere não pode ser um dígito.

Exemplos de nomes válidos:
let userName;
let test123;

Quando o nome contém várias palavras, o camelCase é comumente usado.
Ou seja: as palavras vêm uma após a outra, cada palavra,
exceto a primeira, começando com uma letra maiúscula: myVeryLongName.

O interessante é que o cifrão '$'e o sublinhado '_'também podem ser 
usados ​​em nomes. São símbolos comuns, como letras, 
sem nenhum significado especial.

Esses nomes são válidos:

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

(recomendo fortemente NÃO FAZER ISSO mesmo que seja valido)

Exemplos de nomes de variáveis ​​incorretos:

let 1a; // cannot start with a digit

let my-name; // hyphens '-' aren't allowed in the name

Letras não latinas são permitidas, mas não recomendadas.
É possível usar qualquer idioma, incluindo letras cirílicas,
logogramas chineses e assim por diante, desta forma:

let имя = '...';
let 我 = '...';
Tecnicamente, não há erro algum. Esses nomes são permitidos,
mas existe uma convenção internacional para usar o inglês em nomes
de variáveis. Mesmo que estejamos escrevendo um pequeno script, 
ele pode ter uma longa vida útil. Pessoas de outros países 
podem precisar lê-lo algum dia.

(POR ISSO É IMPORTANTE QUE AS VARIAVEIS SEJAM ESCRITAS EM INGLÊS)

Nomes reservados
Existe uma lista de palavras reservadas que não podem ser usadas 
como nomes de variáveis ​​porque já são utilizadas pela 
própria linguagem.

Por exemplo: let, class, return, e functionsão reservados.

O código abaixo gera um erro de sintaxe:

let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!
*/
