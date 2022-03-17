// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {   
    return array.length;    
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.slice(0).reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) { 
    return array.sort(function (a, b) {
        if(a < b ) {
            return -1
        }
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter(function (a) {
        if(a % 2 === 0 ) {
            return a
        }
    })  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
         
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let numeroMaior = array[0]
    for(let i = 1; i < array.length; i++){
        if(array[i] > numeroMaior) {
            numeroMaior = array[i]
        }
    }
  return numeroMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let nPares = []
    for (let i = 0; nPares.length < n; i++) {
        if (i % 2 == 0) {
            nPares.push(i)
        }
    }
    return nPares
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}