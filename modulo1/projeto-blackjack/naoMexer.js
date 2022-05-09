/**
* NÃO MEXAM NESTE AQUIVO EM HIPÓTESE ALGUMA
*/

function buyCard() {
  // Cria array de cartas
  const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // Cria array de naipes
  const naipes = ["♦️", "♥️", "♣️", "♠️"]

  // Sorteia uma carta
  const numero = cartas[Math.floor(Math.random() * 13)]

  // Sorteia um naipe
  const naipe = naipes[Math.floor(Math.random() * 4)]

  let valor

  // Verifica se é uma das letras e coloca o valor correspondente na variável valor
  if (numero === "A") {
    value = 11
  } else if (numero === "J" || numero === "Q" || numero === "K") {
    value = 10
  } else { // Se nao for uma das letras, só converte a string para número
    value = Number(numero)
  }

  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
  const carta = {
    text: numero + naipe,
    value: value
  }

  return carta
}