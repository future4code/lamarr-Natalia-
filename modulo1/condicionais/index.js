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