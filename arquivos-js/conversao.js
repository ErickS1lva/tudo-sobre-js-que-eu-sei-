/*Conversões de tipo
Na maioria das vezes, os operadores e funções convertem automaticamente os valores que 
recebem para o tipo correto.

Por exemplo, alertconverte automaticamente qualquer valor em uma string para exibi-lo. 
Operações matemáticas convertem valores em números.

Existem também casos em que precisamos converter explicitamente um valor 
para o tipo esperado.*/


/*Conversão de strings
A conversão de strings ocorre quando precisamos da forma de string de um valor.

Por exemplo, alert(value)será que serve para mostrar o valor?

Também podemos chamar a String(value)função para converter um valor em uma string:*/

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

/*A conversão de strings é geralmente óbvia. A falsetorna-se "false", nulltorna-se "null", etc.*/


/*Conversão numérica
A conversão numérica em funções e expressões matemáticas ocorre automaticamente.

Por exemplo, quando a divisão /é aplicada a elementos que não são números:*/

alert( "6" / "2" ); // 3, strings are converted to numbers

//Podemos usar a Number(value)função para converter explicitamente um valor valueem um número:

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

/*A conversão explícita geralmente é necessária quando lemos um valor de uma fonte baseada em string, 
como um formulário de texto, mas esperamos que um número seja inserido.

Se a string não for um número válido, o resultado dessa conversão será NaN. Por exemplo:*/

let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed


/*Regras de conversão numérica:

 Valor	/  Torna-se…
undefined /	NaN
null	/     0
true and false / 1e0
string	  /  Os espaços em branco (incluindo espaços, tabulações \t, quebras de linha \netc.) 
             do início e do fim são removidos. Se a string restante estiver vazia, o resultado é 0. 
             Caso contrário, o número é "lido" da string. Um erro retorna NaN.*/

//Exemplos:

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

/*Observe que null e undefined se comportam de maneira diferente aqui: 
null torna-se zero enquanto undefined torna-se NaN.

A maioria dos operadores matemáticos também realiza essa conversão; */



/*Conversão booleana
A conversão booleana é a mais simples.

Isso ocorre em operações lógicas (mais tarde veremos testes de condição e outras 
coisas semelhantes), mas também pode ser realizado explicitamente com uma chamada para Boolean(value).

A regra de conversão:

Valores que são intuitivamente “vazios”, como 0, uma string vazia, null, undefined, e NaN, 
tornam-se false.
Outros valores se tornam true.
Por exemplo:*/

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

/*Atenção: a sequência de zeros "0"é true
Algumas linguagens (nomeadamente PHP) tratam `null` "0"como `null` false. 
Mas em JavaScript, uma string não vazia é sempre `null` true.*/

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)

/*Resumo
As três conversões de tipo mais utilizadas são para string, para número e para booleano.

String Conversion– Ocorre quando emitimos um valor. Pode ser realizado com String(value). A conversão para string geralmente é óbvia para valores primitivos.

Numeric Conversion– Ocorre em operações matemáticas. Pode ser realizado com Number(value).

A conversão segue as seguintes regras:*/

/*Resumo
As três conversões de tipo mais utilizadas são para string, para número e para booleano.

String Conversion– Ocorre quando emitimos um valor. Pode ser realizado com String(value). 
A conversão para string geralmente é óbvia para valores primitivos.

Numeric Conversion– Ocorre em operações matemáticas. Pode ser realizado com Number(value).
A conversão segue as seguintes regras:


Valor /	Torna-se…
undefined /	NaN
null /	0
true / false  //   1 / 0
string / A string é lida "como está", espaços em branco 
        (incluindo espaços, tabulações \t, quebras de linha \netc.) 
        de ambos os lados são ignorados. Uma string vazia torna-se 0. Um erro retorna NaN.

Boolean Conversion– Ocorre em operações lógicas. Pode ser executado com Boolean(value).

Segue as regras:

Valor  /  Torna-se…
0, null, undefined, NaN,"" /   false
qualquer outro valor    /	true

A maioria dessas regras é fácil de entender e memorizar. As exceções notáveis, 
onde as pessoas geralmente cometem erros, são:

undefinedé NaNcomo um número, não 0.

"0"e strings compostas apenas por espaços, como ` " "&&`, são consideradas verdadeiras 
como um valor booleano.
Objetos não serão abordados aqui. Voltaremos a eles mais tarde, no capítulo 

"Conversão de objetos para tipos primitivos" , que será dedicado exclusivamente a objetos, 
depois de aprendermos conceitos mais básicos de JavaScript.
*/

