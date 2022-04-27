// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

  // implemente sua lógica aqui

  let altura = Number(prompt("Qual altura?"))
  let largura = Number(prompt("Qual largura?"))

console.log (altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {

  // implemente sua lógica aqui

  let anoCorrente = Number(prompt("Em que ano estamos?"))
  let anoNascimento = Number(prompt("Qual é a sua data de nascimento?"))
  
  console.log (anoCorrente-anoNascimento)
  
}

// EXERCÍCIO 03

function calculaIMC(peso, altura) {

  // implemente sua lógica aqui

return peso/(altura*altura)

}

// EXERCÍCIO 04

function imprimeInformacoesUsuario() {

  // implemente sua lógica aqui

  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  
  const nome = (prompt("Qual é o seu nome?"))
  const idade = (prompt("Qual é a sua idade?"))
  const email = (prompt("Qual é o seu endereço de email?"))
  
  console.log [(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`)]

}


//Exercício 5

function imprimeTresCoresFavoritas() {

  // implemente sua lógica aqui

  const faber1 = prompt("Insira sua 1º cor favorita")
  const faber2 = prompt("Insira 2º segunda cor favorita")
  const faber3 = prompt("Insira 3º terceira cor favorita")

  console.log([faber1, faber2, faber3])
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase()
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso

}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length == string2.length

}

// Exercício 9

function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}

// Exercício 10

function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length - 1]

}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const first = retornaPrimeiroElemento(array)
  const last = retornaUltimoElemento(array)

  array[0] = last
  array[array.length - 1] = first

  return array
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui


  return string1.toLowerCase() == string2.toLowerCase()

}

// Exercício 13

function checaRenovacaoRG() {

  // implemente sua lógica aqui

  const anoCorrente = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Digite o ano de nascimento"))
  const dataEmissao = Number(prompt("Digite o ano de emissão do documento"))

  const idade = anoCorrente - anoNascimento
  const tempoCarteira = anoCorrente - dataEmissao

  const cond1 = idade <= 20 && tempoCarteira >= 5
  const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
  const cond3 = idade > 50 && tempoCarteira >= 15

  console.log(cond1 || cond2 || cond3)
}

// Exercício 14

function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const cond1 = ano % 400 == 0
  const cond2 = (ano % 4 == 0) && (ano % 100 !== 0)

  return cond1 || cond2
}

// Exercício 15

function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const maiorDeIdade = prompt("Você é maior de idade (18+)?")
  const escolaridade = prompt("Você possui ensino médio completo?")
  const disponivel = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  console.log(maiorDeIdade == "sim" && escolaridade == "sim" && disponivel === "sim")

}