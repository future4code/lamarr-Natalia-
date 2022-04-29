


/*

Exercícios de interpretação de código

1.

a) Explique o que o código faz. Qual o teste que ele realiza? 

Se o numero traz resultado = 0 na divisão por 2.

b) Para que tipos de números ele imprime no console "Passou no teste"? 

Os números divisíveis por 2 (resto igual a 0).

c) Para que tipos de números a mensagem é "Não passou no teste"?

Para todos números dividos por 2 que terão resto diferente de 0.


2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:


a) Para que serve o código acima?

Para buscar no objeto as informações de uma fruta por meio da inserção do nome da fruta no prompt e em seguida será impresso no console as infomações: 'O preço da fruta ${nome da fruta} é ${preço}'.

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

O preço da fruta maça é R$2.55.

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

O preço da fruta maça é R$5.

3. Leia o código abaixo:

a) O que a primeira linha está fazendo?

Gerando um prompt que vai pedir ao usuário para "Digite o primeiro número."

b) 

Se o usuário digitar 10 a resposta será: Esse número passou no teste.
Se o usuário digitar -10 a resposta será: Não consigo ver um parâmetro de retorno ou impressão para isso, parece não ter, pois não tem um ""else" para direcionar a outra resposta, como não tem outra resposta além do let que não tem relação com nada, eu acho.

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

Opa, parece que minha resposta da questão anterior está aqui, creio que a entrada -10 vai dar erro, undefined talvéz.

*/


/* Exercícios de escrita de código

1.

a-b-c

 */

const ageUser = Number(prompt('Qual a sua idade?'))

    if (ageUser>18){
        console.log('Você pode dirigir.')
    } else{
        console.log('Você pode dirigir.')
    }

 /* 

2. */

const turno = prompt('Em que turno você estuda? Por gentileza, digite M (se for matutino), digite V (se for vespertino) ou digite N (se for noturno).')

    if(turno === 'V'){
         console.log ('Bom dia!')
    }else if (turno === 'M'){
         console.log ('Boa tarde!')
    } else (turno === 'N') 
         console.log('Boa noite!')
{

/*
3.
*/

const turno = prompt ('Em que turno você estuda? Por gentileza, digite M (se for matutino), digite V (se for vespertino) ou digite N (se for noturno).')

switch (turno){
    case 'V':
        console.log('Bom dia!')
    break;
    case 'M' :
        console.log('Boa tarde!')
    break;
    case 'N':
        console.log('Boa noite!')
    
}

/*
4.
*/


const qualFilme = prompt('Qual gênero de filme desejado?') === 'fantasia'

const preco = prompt ('Qual o valor do ingresso?') === '<==15'



function vaiDarCinema (qualFilme, preco){
    if(qualFilme && preco){
        console.log('Bom filme!')
    }else{
        console.log('Escolha outro filme :(')
    }
}

vaiDarCinema(qualFilme,preco)


/*
DESAFIOS.
*/

/*
1.
*/


const qualFilme = prompt('Qual gênero de filme desejado?') === 'fantasia'

const preco = prompt ('Qual o valor do ingresso?') === '<===15'

let lanchinho = prompt ('Qual o lanchinho deseja comprar?') 


function vaiDarCinema (qualFilme, preco){
    if(qualFilme && preco){
        console.log('Bom filme!')
    }else{
        console.log('Escolha outro filme :(')
    } 


}


vaiDarCinema(qualFilme,preco,lanchinho)
console.log(`Aproveite seu ${lanchinho}.`)