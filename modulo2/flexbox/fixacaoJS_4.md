function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui

  let numbers = arrayDeNumeros.filter((number) => {
  return number === numeroEscolhido
})
  let howManyTimes = numbers.length
  if (howManyTimes > 0) {
    return "O número " + numeroEscolhido + " aparece " + howManyTimes + "x"
  } else if (howManyTimes === 0) {
    return "Número não encontrado"
  }
}