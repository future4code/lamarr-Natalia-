// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
    }
    
// EXERCÍCIO 02
    function retornaArrayInvertido(array) {
      return array.reverse()
    }
    
// EXERCÍCIO 03
    function retornaArrayOrdenado(array) {
       return array.sort((a, b) => a - b)   
    }
    
// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter(num => num % 2 == 0);
  }

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter(num => num % 2 == 0).map((num => num ** 2)); 
  }
  

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array);
  }


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    function encontraMaior (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {return num1}
}

    function encontraMenor (num1, num2) {
        if (num1 < num2) {
            return num1;
        } else if (num2 < num1) {
            return num2;
        }
        else {return num1}
    }

return {
    maiorNumero: encontraMaior(num1, num2),
    maiorDivisivelPorMenor: encontraMaior(num1, num2) % encontraMenor (num1, num2) === 0,
    diferenca: encontraMaior(num1, num2) - encontraMenor (num1, num2)
}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i)
        }
    }
    return numerosPares
     
  }

// EXERCÍCIO 09
function sortTriangle(sideA, sideB, sideC) {
    if ((sideA == sideB) && (sideB == sideC)) {
        console.log("Equilateral")
    }
    if ((sideA == sideB) || (sideB == sideC) || (sideC == sideA)) {
        console.log("Isosceles") 
    }
    else {
        console.log("Scalene")    }
    }


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayNumeros = []

    array.sort(function (a, b) { return a - b })
    arrayNumeros.push(array[array.length - 2])
    arrayNumeros.push(array[1])

    return arrayNumeros

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filme = {
  
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
 
 }

 return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let array = {... pessoa, nome:'ANÔNIMO'}
    return array;
 }


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
        let pessoasAutorizadas = []
        for (pessoa of pessoas) {
            if ((pessoa.altura > 1.5) && (pessoa.idade > 14) && (pessoa.idade < 60)) {
                pessoasAutorizadas.push(pessoa)
            }
        }
        return pessoasAutorizadas
    }


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    pessoasAutorizadas = []
    for(let info of pessoas){
      
      if(info.idade > 14 && info.altura > 1.5 && info.idade < 60){
        pessoasAutorizadas.push(info)
      }
      
    }
      return pessoasAutorizadas
    }
     
  
  // EXERCÍCIO 13B
  function retornaPessoasNaoAutorizadas(pessoas) {
    pessoasNaoAutorizadas = []
    for(let info of pessoas){
      
      if(info.idade > 14 && info.altura > 1.5 && info.idade < 60){
        
      } else {
        pessoasNaoAutorizadas.push(info)
      }
       
    }
    return pessoasNaoAutorizadas 
  
  }
  
  // EXERCÍCIO 14
  function retornaContasComSaldoAtualizado(contas) {
    contas.map(conta => conta.compras = conta.compras.reduce((a, b) => a + b, 0));
    
    contas.map(conta => conta.saldoTotal = conta.saldoTotal - conta.compras);
    
    contas.map(conta => conta.compras = []);  
  
    return contas;
  }
  
  // EXERCÍCIO 15A
  function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function (x, y) {
      
      return (x.nome > y.nome) ? 1 : ((y.nome > x.nome) ? -1 : 0)
    })
    return consultas
  }
  
  // EXERCÍCIO 15B
  function retornaArrayOrdenadoPorData(consultas) {
    const datas = consultas.sort 

    let (a, b) 
         if (a.dataConsulta < b.dataConsulta) {
             return -1;
         }
         if (a.dataConsulta > b.dataConsulta) {
             return 1;
         }
         return 0;
         
         return datas;
        }

    