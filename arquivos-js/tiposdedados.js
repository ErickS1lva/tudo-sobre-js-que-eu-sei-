/*Tipos de dados
Em JavaScript, um valor é sempre de um tipo específico. Por exemplo,
 uma string ou um número.

Existem oito tipos básicos de dados em JavaScript. Aqui, 
vamos abordá-los de forma geral e, nos próximos capítulos, 
falaremos sobre cada um deles em detalhes.

Podemos atribuir qualquer tipo de dado a uma variável. Por exemplo, 
uma variável pode, em determinado momento, ser uma string e, 
em seguida, armazenar um número: */

let message = 'hello';
message = 1234;

/*Linguagens de programação que permitem esse tipo de coisa, 
como o JavaScript, são chamadas de "tipadas dinamicamente", 
o que significa que existem tipos de dados, 
mas as variáveis ​​não estão vinculadas a nenhum deles.*/

//Number

let n = 123;
n = 12.345;

/*O tipo de número representa tanto números inteiros quanto números de ponto flutuante.

Existem muitas operações com números, como multiplicação *,
divisão /, adição +, subtração -e assim por diante.

Além dos números comuns, existem os chamados “valores numéricos especiais” 
que também pertencem a este tipo de dados: Infinity, -Infinitye NaN.

InfinityRepresenta o infinito matemático ∞. 
É um valor especial que é maior que qualquer número.

Podemos obtê-lo como resultado da divisão por zero:*/

alert( 1 / 0 ); // Infinity

//Ou simplesmente faça referência a ele diretamente:

alert( Infinity ); // Infinity

/*NaNrepresenta um erro de cálculo. 
É o resultado de uma operação matemática 
incorreta ou indefinida, por exemplo:*/

alert( "not a number" / 2 ); // NaN

//NaNé persistente. Qualquer operação matemática adicional sobre NaNos retornos NaN:

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

//BigInt

/*Em JavaScript, o tipo "number" não pode representar com segurança valores 
inteiros maiores que (ou seja, ) ou menores 
que (para valores negativos).(253-1)9007199254740991-(253-1)

Para sermos realmente precisos, o tipo "número" pode armazenar inteiros maiores 
(até 1000 ), mas fora do intervalo seguro de inteiros haverá um erro de precisão, 
porque nem todos os dígitos cabem no armazenamento fixo de 64 bits. 
Portanto, um valor "aproximado" pode ser armazenado.1.7976931348623157 * 10308±(253-1)

Por exemplo, estes dois números (logo acima do intervalo seguro) são iguais:*/

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

/*Ou seja, todos os números inteiros ímpares maiores que 1 não podem ser armazenados 
de forma alguma no tipo "número".(253-1)

Para a maioria dos propósitos, um intervalo de valores é suficiente, mas às vezes 
precisamos de toda a gama de números inteiros realmente grandes, por exemplo, 
para criptografia ou registros de data e hora com precisão de microssegundos.±(253-1)

BigIntO tipo `int` foi adicionado recentemente à linguagem para representar números 
inteiros de comprimento arbitrário.

Um BigIntvalor é criado adicionando-se um caractere nao final de um número inteiro:*/

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;


//string

//Em JavaScript, uma string deve ser delimitada por aspas.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

/*Em JavaScript, existem 3 tipos de aspas.

Aspas duplas: "Hello".
Aspas simples: 'Hello'.
Aspas invertidas: `Hello`.

Aspas duplas e aspas simples são aspas "simples". Praticamente 
não há diferença entre elas em JavaScript.

Os crases (`) são aspas com "funcionalidade estendida". 
Elas nos permitem incorporar variáveis ​​e expressões em uma string, 
envolvendo-as em aspas ${…}, por exemplo:*/

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

/*A expressão interna ${…}é avaliada e o resultado passa a fazer parte 
da string. Podemos colocar qualquer coisa ali: uma variável como `x` name, 
uma expressão aritmética como `y` 1 + 2ou algo mais complexo.

Observe que isso só pode ser feito em citações com crases (`). Outras citações 
não possuem essa funcionalidade de incorporação!*/

alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)

//LEMBRA SEMPRE DE VER ONDE ESTÃO AS ASPAS

/*Não existe nenhum tipo de caractere .
Em algumas linguagens, existe um tipo de "caractere" 
especial para um único caractere. Por exemplo, na linguagem C e 
em Java, ele é chamado de "char".

Em JavaScript, não existe esse tipo. Existe apenas um tipo: 
`string` string. Uma string pode conter zero caracteres 
(estar vazia), um caractere ou vários caracteres.*/

//NÃO TEM NO JAVASCRIPT



//Booleano (tipo lógico)[TRUE OR FALSE]

/*O tipo booleano possui apenas dois valores: truee false.

Este tipo é comumente usado para armazenar valores sim/não: truesignifica “sim, correto” e falsesignifica “não, incorreto”.

Por exemplo:*/

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

//Os valores booleanos também surgem como resultado de comparações:

let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")


/*O valor “nulo”(NULL)

O valor especial nullnão pertence a nenhum dos tipos descritos acima.

Constitui um tipo separado, que contém apenas o nullvalor:*/

let age = null;

/*Em JavaScript, ` nullnull` não é uma "referência a um objeto inexistente" ou um 
"ponteiro nulo" como em algumas outras linguagens.

É apenas um valor especial que representa "nada", "vazio" ou "valor desconhecido".

O código acima indica que age é desconhecido*/



//O valor “indefinido” (UNDEFINED)

/*O valor especial undefinedtambém se destaca. Cria um tipo próprio, assim como null...

O significado undefinedé "nenhum valor foi atribuído".

Se uma variável for declarada, mas não atribuída, seu valor será undefined:*/

let age2;

alert(age2); // shows "undefined"

//Tecnicamente, é possível atribuir um valor explicitamente undefineda uma variável:

let age3 = 100;

// change the value to undefined
age3 = undefined;

alert(age3); // "undefined"

/*…Mas não recomendamos fazer isso. Normalmente, usa-se `undefined` 
nullpara atribuir um valor “vazio” ou “desconhecido” a uma variável, 
enquanto `undefined` undefinedé reservado como valor inicial padrão para itens não atribuídos.*/


//Objetos e Símbolos

/*O object tipo é especial.

Todos os outros tipos são chamados de “primitivos” porque seus valores podem
conter apenas um único elemento (seja uma string, um número ou 
qualquer outra coisa). Em contraste, os objetos são usados ​​para armazenar 
coleções de dados e entidades mais complexas.

Sendo tão importantes, os objetos merecem um tratamento especial. 
Abordaremos o tema deles mais adiante, no capítulo Objetos , depois de aprendermos mais 
sobre os elementos primitivos.

O symboltipo é usado para criar identificadores únicos para objetos. Precisamos mencioná-lo 
aqui por uma questão de completude, mas também adiamos os detalhes para 
quando conhecermos os objetos.*/


//O tipo de operador

/* Uma chamada a ` typeof xreturns` retorna uma string com o nome do tipo:

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

As três últimas linhas podem precisar de explicações adicionais:

Math é um objeto integrado que fornece operações matemáticas. 
Aprenderemos sobre ele no capítulo Números. 
Aqui, ele serve apenas como um exemplo de objeto.

O resultado de typeof null`is` é ` "object".`. 
Esse é um erro oficialmente reconhecido em `is` typeof, que vem 
dos primórdios do JavaScript e foi mantido por questões de compatibilidade. 
Definitivamente, ` nullis` não é um objeto. É um valor especial com um tipo próprio. 
O comportamento de ` typeofis` está incorreto aqui.

O resultado de typeof alert `is` é `true` "function", porque ` alert is` 
é uma função. Estudaremos funções nos próximos capítulos, onde também 
veremos que não existe um tipo "função" específico em JavaScript. Funções 
pertencem ao tipo `object`. Mas ` typeofis` as trata de forma diferente, 
retornando `true` "function". Isso também vem dos primórdios do JavaScript. 
Tecnicamente, esse comportamento não é correto, mas pode ser conveniente na prática.


A typeof(x)sintaxe
Você também pode encontrar outra sintaxe: typeof(x). É o mesmo que typeof x.

Para deixar claro: `x` typeofé um operador, não uma função. 
Os parênteses aqui não fazem parte de ` typeofx`. 
São os parênteses usados ​​para agrupamento matemático.

Normalmente, esses parênteses contêm uma expressão matemática, 
como (2 + 2), mas aqui eles contêm apenas um argumento (x). Sintaticamente, 
eles permitem evitar um espaço entre o typeofoperador e seu argumento, 
e algumas pessoas gostam disso.

Algumas pessoas preferem typeof(x), embora a typeof xsintaxe seja muito mais comum.

PODE FICAR UM POUCO CONFUSO MAS SE TU FEZ O CURSO DO GUANABARA TU VAI SABER
*/

//RESUMO

/*Existem 8 tipos básicos de dados em JavaScript.

Sete tipos de dados primitivos:
number Para números de qualquer tipo: inteiros ou de ponto flutuante, 
os inteiros são limitados por .±(253-1)

bigintpara números inteiros de comprimento arbitrário.

stringPara strings. Uma string pode ter zero ou mais caracteres; 
não existe um tipo separado para caracteres individuais.

booleanpara true/ false.

nullPara valores desconhecidos – um tipo independente que possui um único valor null.

undefinedPara valores não atribuídos – um tipo independente que possui um único valor undefined.

symbolpara identificadores únicos.

E um tipo de dado não primitivo:
objectpara estruturas de dados mais complexas.

O typeofoperador permite-nos ver qual o tipo de dado armazenado numa variável.

Geralmente usado como typeof x, mas typeof(x)também é possível.
Retorna uma string com o nome do tipo, como "string".

Para nullretornos "object"– isso é um erro na linguagem, não é realmente um objeto.
*/
