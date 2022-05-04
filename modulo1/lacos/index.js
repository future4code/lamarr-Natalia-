
/*

**Exercícios de interpretação de código**


1.

Será impresso o número 10, o valor final da execução dos blocos, creio.


2.

a. O que vai ser impresso no console?

Todos os números maiores que 18.


b.
Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?

Travei neesa, ui.

3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

Será impresso 4 linhas, com um "*" para cada entrada correspondente a linha.

*
**
***
****

Algo assim e ainda funcionaria se a entrada do prompt fosse 100, 1.000, 3.000, trazendo a quantidade de asteriscos do numero dentro da linha que corresponde esse número.
Pelo menos foi o que eu entendi como esse valor de atribuição:

 quantidadeAtual++



**Exercícios de escrita de código**

1. 

let askPetUser = Number(prompt("Quantos bichinhos de estimação você tem?"))

if (petUser ===0){
   console.log("Que pena! Você pode adotar um pet.")
 } else {
     let petUser = 0
     let arrayPet = []
     while (petUser < askPetUser){
        let petName = prompt("Digite o nome do seu ${petUser +1}º bichinho.")
        arrayNames.push(petName)
        petUser+++
     }

console.log(arrayNames)

}   
