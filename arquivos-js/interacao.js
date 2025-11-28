/* alert
Este nós já vimos. Ele exibe uma mensagem e aguarda que o usuário pressione "OK".

Por exemplo:
*/

alert("Hello");

/*A mini-janela com a mensagem é chamada de janela modal. 
A palavra "modal" significa que o visitante não pode interagir com o resto da página, 
clicar em outros botões, etc., até que tenha interagido com a janela. 
Neste caso, até que clique em "OK".*/

//prompt

//A função promptaceita dois argumentos:

//result = prompt(title, [default]);

/*Aparece uma janela modal com uma mensagem de texto, 
um campo de entrada para o visitante e os botões OK/Cancelar.

title
O texto a ser exibido ao visitante.


default
Um segundo parâmetro opcional, o valor inicial para o campo de entrada.

Os colchetes na sintaxe[...]
Os colchetes default na sintaxe acima indicam que o parâmetro é opcional, não obrigatório.

*/

/*O visitante pode digitar algo no campo de entrada e pressionar OK. Então, obtemos esse texto no result. 
Ou ele pode cancelar a entrada pressionando Cancelar ou a Esctecla Enter, e então obtemos o nulltexto como result.

A chamada promptretorna o texto do campo de entrada ou, nullse a entrada foi cancelada, retorna falso.

Por exemplo:*/

let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!

/*No IE: sempre forneça umdefault
O segundo parâmetro é opcional, mas se não o fornecermos, o Internet Explorer inserirá o texto "undefined"no prompt.

Execute este código no Internet Explorer para ver: */

let test = prompt("Test");
//Portanto, para que os prompts tenham uma boa aparência no IE, recomendamos sempre fornecer o segundo argumento:

let test1 = prompt("Test", ''); // <-- for IE




//confirm

//A sintaxe:

result = confirm(question);

/*A função confirmexibe uma janela modal com um elemento questione dois botões: OK e Cancelar.

O resultado é truese a tecla OK for pressionada e, falsecaso contrário, é exibido.

Por exemplo:*/

let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed


/*Resumo
Abordamos 3 funções específicas do navegador para interagir com os visitantes:

alert
Exibe uma mensagem.

prompt
Exibe uma mensagem solicitando ao usuário que insira um texto.

Retorna o texto ou, se o botão Cancelar Escfor clicado , retorna o texto null.

confirm
Exibe uma mensagem e aguarda que o usuário pressione “OK” ou “Cancelar”. 
Retorna “ OK” truepara “OK” e false“Cancelar” para “Cancelar” Esc.
Todos esses métodos são modais: eles pausam a execução do script e não permitem que o visitante 
interaja com o restante da página até que a janela seja fechada.

Existem duas limitações comuns a todos os métodos acima:

A localização exata da janela modal é determinada pelo navegador. Normalmente, ela fica no centro.
A aparência exata da janela também depende do navegador. Não podemos modificá-la.
Esse é o preço da simplicidade. Existem outras maneiras de exibir janelas mais bonitas e 
proporcionar uma interação mais rica com o visitante, mas se os "enfeites" não forem tão importantes, 
esses métodos funcionam perfeitamente.
*/
