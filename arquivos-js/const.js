//CONSTANTES

//Para declarar uma variável constante (que não muda),
//use constem vez de let:

const myBirthday = '01.04.2004'

/*As variáveis ​​declaradas usando `var` const são 
chamadas de "constantes". Elas não podem ser reatribuídas. 
Uma tentativa de fazê-lo causaria um erro.

const myBirthday = '01.04.2004'
myBirthday = '18.08.2006'
*/

/*Constantes em maiúsculas
É prática comum usar constantes como sinônimos para valores difíceis 
de memorizar, que são conhecidos antes da execução do código.

Essas constantes são nomeadas usando letras maiúsculas e sublinhados.

Por exemplo, vamos criar constantes para cores 
no chamado formato "web" (hexadecimal):

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_ORANGE;
alert(color); // #FF7F00

Benefícios:

COLOR_ORANGEé muito mais fácil de lembrar do que "#FF7F00".
É muito mais fácil digitar errado "#FF7F00"do que COLOR_ORANGE.
Ao ler o código, COLOR_ORANGEé muito mais 
significativo do que #FF7F00.
Quando devemos usar letras maiúsculas para uma constante e quando 
devemos escrevê-la normalmente? Vamos esclarecer isso.

Ser uma "constante" significa simplesmente que o valor de 
uma variável nunca muda. Mas algumas constantes são conhecidas 
antes da execução (como um valor hexadecimal para vermelho) 
e algumas constantes são calculadas em tempo de execução, 
durante a execução, mas não mudam após sua atribuição inicial.

Por exemplo:

const pageLoadTime = tempo que a pagina leva para carrega;

O valor de ` pageLoadTimeis` não é conhecido antes do carregamento da página, 
por isso recebe um nome normal. Mas continua sendo uma constante, 
pois não muda após a atribuição.

Em outras palavras, as constantes com nomes em maiúsculas são usadas apenas 
como sinônimos para valores "fixos" no código.

Dê nome às coisas corretamente
Falando em variáveis, há mais uma coisa extremamente importante.

O nome de uma variável deve ter um significado claro e óbvio, 
descrevendo os dados que ela armazena.

A escolha de nomes de variáveis ​​é uma das habilidades mais importantes e 
complexas em programação. Uma simples olhada nos nomes das variáveis ​​pode 
revelar qual código foi escrito por um iniciante e qual por um desenvolvedor experiente.

Em um projeto real, a maior parte do tempo é gasta modificando e estendendo uma 
base de código existente, em vez de escrever algo completamente novo do zero. 
Quando retornamos a um código depois de termos feito outra coisa por um tempo, 
é muito mais fácil encontrar informações que estejam bem rotuladas. Ou seja, 
quando as variáveis ​​têm bons nomes.

Por favor, dedique um tempo para pensar no nome certo para uma variável antes de 
declará-la. Isso lhe trará ótimos resultados.

Algumas regras úteis a seguir são:

Use nomes legíveis para humanos, como userNameou shoppingCart.

Evite abreviações ou nomes curtos como a, b, e c, a menos que você saiba o que está fazendo.

Crie nomes o mais descritivos e concisos possível. Exemplos de nomes ruins 
são `__name__` datae `__value__` value. Esses nomes não dizem nada. 

Só é aceitável usá-los se o contexto do código deixar excepcionalmente 

óbvio a qual dado ou valor a variável está se referindo.
Definam os termos em conjunto, tanto em equipe quanto individualmente. 
Se um visitante do site for chamado de "usuário", 
devemos nomear as variáveis ​​relacionadas como "usuário" currentUserem newUservez de "usuário" 
ou currentVisitor"usuário" newManInTown.
Parece simples? De fato é, mas criar nomes de variáveis ​​descritivos e concisos na prática não é.*/


/*Resumo
Podemos declarar variáveis ​​para armazenar dados usando as palavras-chave 
var`var`, let`variable` ou `constvariable`.

let– é uma declaração de variável moderna.

var– é uma declaração de variável à moda antiga. Normalmente não a usamos, 
mas abordaremos as diferenças sutis letno capítulo "O antigo 'var'" , caso você precise delas.

const– é semelhante a let, mas o valor da variável não pode ser alterado.
As variáveis ​​devem ser nomeadas de forma que nos permita entender facilmente o que contêm.
*/





