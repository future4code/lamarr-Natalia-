/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
{
  
if (confirm("♠️ ♥️ ♣️ ♦️ Let's play Blackjack! ♠️ ♥️ ♣️ ♦️ Do you wanna play a new round? ♠️ ♥️ ♣️ ♦️")) {
   let cardsUser = []
   let cardsComputer = []
   cardsUser.push(buyCard()), (buyCard())
   cardsComputer.push(buyCard(), buyCard())

   while (cardsUser[0].text[0] === "A" && cardsUser[1].text[0] === "A") {
      cardsUser[0] = buyCard()
      cardsUser[1] = buyCard()
   }
   while (cardsComputer[0].text[0] === "A" && cardsComputer[1].text[0] === "A") {
      cardsComputer[0] = buyCard()
      cardsComputer[1] = buyCard()
   }

   let userScore = valueCards(cardsUser)
   let computerScore = valueCards(cardsComputer)
   let buyOut = false

   while (userScore < 21) {
      let askContinue = `Your card is ${formatCards(cardsUser)}. The card computer is ${cardsComputer[0].text}. Do you wanna a new card 👀👀?`

      if (confirm(askContinue)) {
         let newCard = buyCard()
         userScore += newCard.value
         cardsUser.push(newCard)
      } else {
         buyOut = true
         break
      }
   }

   if (buyOut) {
      while (computerScore < userScore) {
         let newCard = buyCard()
         computerScore += newCard.value
         cardsComputer.push(newCard)
      }
   }

   let mensageScore = `Your cards amount is ${formatCards(cardsUser)}. Your score is ${userScore}.`
   mensageScore += `The cars computer are ${formatCards(cardsComputer)}.The score computer is ${valueCards(cardsComputer)}.`

   if (userScore === computerScore) {
      mensageScore += "Empate!"
   } else {
      if (userScore <= 21 && (userScore> computerScore ||  computerScore > 21)) {
         mensageScore += "\uD83C\uDFC6 You win! 🥳😁 \uD83C\uDFC6"
      } else {
         mensageScore += "6💻\uD83C\uDFC6🤖The computer win!🤖\uD83C\uDFC6💻"
      }
   }
   alert(mensageScore)

} else {
   console.log("Game Over")
}

function formatCards(cards) {
   let retornString = ""
   for (const card of cards) {
      retornString += " " + card.text
   }
   return retornString
}

function valueCards(cards) {
   let valueScore = 0
   for (const card of cards) {
      valueScore += card.value
   }
   return valueScore
}

}