/*Operadores básicos, matemática
Conhecemos muitas operações matemáticas básicas da escola. 
São elas: adição +, multiplicação *, subtração -, e assim por diante.

Neste capítulo, começaremos com operadores simples e, em seguida, 
nos concentraremos em aspectos específicos do JavaScript, 
não abordados na aritmética escolar.*/

/*Termos: “unário”, “binário”, “operando”
Antes de prosseguirmos, vamos entender alguns termos comuns.

Um operando é aquilo a que os operadores são aplicados. Por exemplo, 
na multiplicação de , 5 * 2 existem dois operandos: o operando da esquerda é 5 e o operando 
da direita é 2. Às vezes, as pessoas chamam esses operandos de "argumentos" em vez de "operandos".

Um operador é unário se tiver um único operando. Por exemplo, 
a negação unária -inverte o sinal de um número:*/

let z = 1;

z = -z;
alert( z ); // -1, unary negation was applied

//Um operador é binário se tiver dois operandos. O mesmo sinal de menos existe também na forma binária:

let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values

/*Formalmente, nos exemplos acima temos dois operadores diferentes que compartilham o mesmo símbolo: 
o operador de negação, um operador unário que inverte o sinal, e o operador de subtração, 
um operador binário que subtrai um número de outro. 
*/

/*
Matemática
As seguintes operações matemáticas são suportadas:

Adição +,
Subtração -,
Multiplicação *,
Divisão /,
Restante(resto da divisão) %,
Exponenciação **.
Os quatro primeiros são simples, enquanto % os outros dois 
**precisam de algumas palavras sobre eles.
*/


/*Restante %
O operador de resto %, apesar da aparência, não está relacionado com porcentagens.

O resultado de a % bé o resto da divisão inteira de apor b.

Por exemplo:*/

alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

/*Exponenciação **
O operador de exponenciação a ** beleva aà potência de b.

Na matemática escolar, escrevemos isso como um b .

Por exemplo:*/

alert( 2 ** 2 ); // 2² = 4 
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

/*Assim como na matemática, o operador de exponenciação também é definido para números não inteiros.
Por exemplo, a raiz quadrada é uma exponenciação por ½:*/

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)(se não ficou claro isso é raiz quadrada)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)(raiz cubica)


/*Concatenação de strings com operador binário +
Vamos conhecer os recursos dos operadores JavaScript que vão além da aritmética escolar.

Normalmente, o operador de adição +soma números.

Mas, se o operador binário +for aplicado a strings, ele as mescla (concatena):*/

let s = "my" + "string";
alert(s); // mystring

//Note que, se algum dos operandos for uma string, o outro também será convertido para uma string.

//Por exemplo:

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

/*Veja, não importa se o primeiro operando é uma string ou o segundo.

Aqui está um exemplo mais complexo:*/

alert(2 + 2 + '1' ); // "41" and not "221"

/*Aqui, os operadores funcionam um após o outro. O primeiro +soma dois números, então retorna 4, 
depois o próximo +adiciona a string 1a ele, então é como 4 + '1' = '41'.*/

alert('1' + 2 + 2); // "122" and not "14"

/*Aqui, o primeiro operando é uma string, o compilador trata os outros dois operandos 
como strings também. O 2 resultado é concatenado a '1', 
então fica como '1' + 2 = "12"e "12" + 2 = "122".

O + operador binário é o único que suporta strings dessa maneira. 
Outros operadores aritméticos funcionam apenas com números e sempre 
convertem seus operandos em números.

Aqui está a demonstração de subtração e divisão:*/

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

/*Conversão numérica, unária +
O sinal de mais +existe em duas formas: a forma binária que usamos acima e a forma unária.

O operador unário de adição, ou seja, o operador de adição +aplicado a um único valor, 
não altera a composição de números. No entanto, se o operando não for um número, 
o operador unário de adição o converte em um número.*/

//Por exemplo:

// No effect on numbers
let a = 1;
alert( +x ); // 1

let b = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

/*Na verdade, faz a mesma coisa que Number(...), mas é mais curto.

A necessidade de converter strings em números surge com muita frequência. 
Por exemplo, se estivermos recebendo valores de campos de formulário HTML, 
eles geralmente são strings. E se quisermos somá-los?

O operador binário de adição os somaria como strings:*/

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings

//Se quisermos tratá-los como números, precisamos convertê-los e depois somá-los:

let pineapple = "2";
let grape = "3";

// both values converted to numbers before the binary plus
alert( +pineapple + +grape ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

/*Do ponto de vista de um matemático, a abundância de sinais de adição pode parecer estranha. 
Mas, do ponto de vista de um programador, não há nada de especial: 
os sinais de adição unários são aplicados primeiro, convertendo strings em números, 
e então o sinal de adição binário os soma.

Por que os sinais de adição unários são aplicados aos valores antes dos binários? Como veremos, 
isso se deve à sua maior precedência 



Precedência do operador
Se uma expressão tiver mais de um operador, a ordem de execução é definida pela sua precedência, 
ou seja, pela ordem de prioridade padrão dos operadores.

Na escola, todos nós sabemos que a multiplicação em uma expressão 1 + 2 * 2 deve ser calculada 
antes da adição. Isso se deve exatamente à questão da precedência. 
Diz-se que a multiplicação tem precedência sobre a adição.

Os parênteses anulam qualquer precedência, portanto, se não estivermos satisfeitos 
com a ordem padrão, podemos usá-los para alterá-la. Por exemplo, escreva (1 + 2) * 2.

Existem muitos operadores em JavaScript. 
Cada operador possui um número de precedência correspondente. 
O operador com o número maior é executado primeiro. Se a precedência for a mesma, 
a ordem de execução é da esquerda para a direita.

Segue um trecho da tabela de precedência 
(você não precisa memorizá-la, mas observe que os operadores unários têm precedência 
sobre os binários correspondentes):*/



/*
Precedência / Nome / Sinal
… /	… /	…
14 / unário mais / +
14 / negação unária / -
13 / exponenciação / **
12 / multiplicação / *
12 / divisão / /
11 / adição / +
11 / subtração / -
… / … / …
2 / atribuição/ =
… / … / … 

Como podemos ver, o “soma unário” tem uma prioridade 14 maior que a 11 da “adição” 
(soma binária). É por isso que, na expressão "+apples + +oranges", 
os somatórios unários operam antes da adição.

*/

/*Atribuição
Note-se que uma atribuição = também é um operador. Ela está listada na 
tabela de precedência com a prioridade muito baixa de 2.

É por isso que, quando atribuímos uma variável, como x = 2 * 2 + 1,
os cálculos são feitos primeiro e depois a = é avaliada, armazenando o resultado em x.*/

let c  = 2 * 2 + 1;

alert( c ); // 5

/*
Atribuição = retorna um valor
O fato de = ser um operador, e não uma construção linguística "mágica", 
tem uma implicação interessante.

Todos os operadores em JavaScript retornam um valor. Isso é óbvio para ` +and` e `or` -, 
mas também é verdade para `and` =.

A chamada x = valueescreve o valuevalor x e depois o retorna .

Aqui está uma demonstração que usa uma atribuição como parte de uma expressão mais complexa:
*/

let d = 1;
let e = 2;

let f = 3 - (d = e + 1);

alert( d ); // 3
alert( f ); // 0

/*
No exemplo acima, o resultado da expressão (d = e + 1) é o valor que foi atribuído a a (isto é, 3). 
Ele é então usado para avaliações posteriores.

Código curioso, não é? Devemos entender como funciona, pois às vezes o encontramos 
em bibliotecas JavaScript.

No entanto, por favor, não escreva o código dessa forma. Esses truques definitivamente não 
tornam o código mais claro ou legível.
*/

/*Encadeamento de tarefas
Outra funcionalidade interessante é a possibilidade de encadear atribuições:*/

let g, h, i;

g = h = i = 2 + 2;

alert( g ); // 4
alert( h ); // 4
alert( i ); // 4

/*As atribuições encadeadas são avaliadas da direita para a esquerda. Primeiro, 
a expressão mais à direita 2 + 2é avaliada e, em seguida, atribuída às variáveis ​​
à esquerda: i, h e g. No final, todas as variáveis ​​compartilham um único valor.

Mais uma vez, para facilitar a leitura, é melhor dividir esse código em algumas linhas:*/

i = 2 + 2;
h = i;
g = i;

//Isso facilita a leitura, especialmente ao percorrer o código rapidamente com os olhos.

/*
Modificação no local
Frequentemente precisamos aplicar um operador a uma variável e armazenar o novo 
resultado nessa mesma variável.

Por exemplo:*/

let n = 2;
n = n + 5;
n = n * 2;

//Essa notação pode ser abreviada usando os operadores +=e *=:

let m = 2;
m += 5; // now n = 7 (same as n = n + 5)
m *= 2; // now n = 14 (same as n = n * 2)

alert( m ); // 14

/*Existem operadores curtos de "modificar e atribuir" para todos os operadores aritméticos 
e bit a bit: /=, -=, etc.

Esses operadores têm a mesma precedência que uma atribuição normal, portanto, 
são executados após a maioria dos outros cálculos:*/

let o = 2;

o *= 3 + 5; // right part evaluated first, same as o *= 8

alert( o ); // 16

/*Incremento/decremento
Aumentar ou diminuir um número em uma unidade está entre as operações numéricas mais comuns.

Portanto, existem operadores específicos para isso:

O incremento ++ aumenta uma variável em 1:
*/

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

//O decremento -- diminui uma variável em 1:

let counte = 2;
counte--;        // works the same as counter = counter - 1, but is shorter
alert( counte ); // 1

/*Incremento/decremento só podem ser aplicados a variáveis. 
Tentar usá-los em um valor como 5++esse resultará em um erro.


Os operadores ` ++and` --podem ser colocados antes ou depois de uma variável.

Quando o operador vem depois da variável, ele está na “forma pós-fixada”: counter++.
A “forma prefixada” ocorre quando o operador vem antes da variável: ++counter.
Ambas as afirmações fazem a mesma coisa: aumentam counterem 1.

Existe alguma diferença? Sim, mas só podemos vê-la se usarmos o valor retornado de ++/--.

Vamos esclarecer. Como sabemos, todos os operadores retornam um valor. 
O incremento/decremento não é exceção. A forma prefixada retorna o novo valor, 
enquanto a forma sufixo retorna o valor antigo (anterior ao incremento/decremento).

Para ver a diferença, aqui está um exemplo:*/

let counterr = 1;
let ab = ++counterr; // (*)

alert(ab); // 2

/*Na linha (*), o prefixo é ++counter incrementado countere retorna o novo valor, 
2. Portanto, o alert resultado é 2.

Agora, vamos usar a forma pós-fixada:*/

let counters = 1;
let bc = counters++; // (*) changed ++counter to counter++

alert(bc); // 1

/*Na linha (*), a forma pós-fixada counter++ também incrementa counter, 
mas retorna o valor antigo (anterior ao incremento). Portanto, o alertresultado é 1.

Em resumo:

Se o resultado do incremento/decremento não for utilizado, 
não há diferença em qual forma usar:*/

let counterw = 0;
counterw++;
++counterw;
alert( counterw ); // 2, the lines above did the same

/*Se quisermos incrementar um valor e usar imediatamente o resultado do operador, 
precisamos da forma prefixada:*/

let counnter = 0;
alert( ++counnter ); // 1

/*Se quisermos incrementar um valor, mas utilizando o seu valor anterior, 
precisamos da forma com sufixo:*/

let couunter = 0;
alert( couunter++ ); // 0


/*Incremento/decremento entre outros operadores
Os operadores ++/--também podem ser usados ​​dentro de expressões.
Sua precedência é maior do que a da maioria das outras operações aritméticas.

Por exemplo:

let counter = 1;
alert( 2 * ++counter ); // 4
Compare com:

let counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value
Embora tecnicamente correta, essa notação geralmente torna o código menos legível. Uma linha executa várias tarefas – o que não é bom.

Ao ler o código, uma rápida varredura ocular "vertical" pode facilmente passar despercebida, counter++e não ficará óbvio que a variável aumentou.

Recomendamos um estilo de “uma linha – uma ação”:

let counter = 1;
alert( 2 * counter );
counter++;
*/