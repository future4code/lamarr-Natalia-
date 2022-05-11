
/**Exercícios de interpretação de código**

1.

a. O que vai ser impresso no console?

"Matheus Nachtergaele"
"Virginia Cavendish"
"canal: "Canal Brasil", horario: "19h""

2.

a. O que vai ser impresso no console?

console.log(cachorro)
Será impresso o objeto cachorro:

Objeto = {
nome: "Juca", 
idade: "3", 
raca: "SRD"}

console.log(gato)
Será impresso a spread "...cachorro" nova atribuição na "constante gato" como "cópia do objeto cachorro" e atibuido/substituido o "nome" por "Juba":

Objeto = {
nome: "Juba", 
idade: "3", 
raca: "SRD"}

console.log(tartaruga)
Será impresso a spread "...gato" atribuída como cópia do "objeto cachorro" e trocando a letra "a" por "o" do nome "Juba" resultando em "Jubo" : 

Objeto = {
nome: "Jubo", 
idade: "3", 
raca: "SRD"}

b. O que faz a sintaxe dos três pontos antes do nome de um objeto?

A sintaxe "..." antes do nome do objeto faz spread, portanto uma cópia identica do objeto que pode sofrer adições, subtrações e alterações sem resultar em mudanças/alterações de elementos no objeto original.

.


a. O que vai ser impresso no console?

"False"
"Undefined"

b. Explique o valor impresso no console. Você sabe por que isso aconteceu?

Foi impresso o conteúdo de "backender" que é o valor "False" e a "Altura", como não definida/não tem valor no objeto, não pode trazer um retorno por isso a impressão foi impresso "Undefined".

*/


/**Exercícios de escrita de código**

1.

a.*/
 
 const persona = {
    nome: "Ana Paula", 
    apelidos: ["Aninha", "Paulinha", "Paulão"]
    

 }

 console.log(` Sou ${persona.apelidos[0]} quando calma, quando descansada sou ${persona.apelidos[1]} e a depender da ocasião sou ${persona.apelidos[2]} `)

 /*b.*/


 const novaPersona = {
    ...persona,
    apelidos: ["Ann", "Paulera", "Ana Pê"],
    
    }

    console.log(` Sou ${novaPersona.apelidos[0]} quando calma, quando descansada sou ${novaPersona.apelidos[1]} e a depender da ocasião sou ${novaPersona.apelidos[2]}`)

/*2.

a.*/

const pessoa1 = {

   nome: "Andreas", 
   idade: "39",
   profissão: "Afinador de piano",


}

const pessoa2 = {

    nome: "Cleopatra", 
    idade: "38",
    profissão: "Imperatriz",

 
    /*b.*/
 }

 function retornaInformacoes (obj) {

    let arrayInfomacoes = [obj.nome, obj.nome.lenght, obj.idade, obj.profissão.lenght]

    return arrayInfomacoes

 }
    
    console.log(retornaInformacoes(pessoa1))
    console.log(retornaInformacoes(pessoa2))

 
/*3.

a.b.c.d.*/

    let carrinho = []

    const fruta1 = {

    nome: "Acabate",
    disponibilidade: "true",
    
    }


    const fruta2 = {
    
    nome: "Acabate",
    disponibilidade: "false",
    
    }
    
    const fruta3 = {
    
    nome: "Uva",
    disponibilidade: "true",
    
    }
    
    console.log()

    function feira(fruta){
    carrinho.push(fruta)
    
    }

    {

    feira(fruta1)
    feira(fruta2)
    feira(fruta3)
}


console.log(carrinho)