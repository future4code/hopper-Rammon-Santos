// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------
//teste gitIGNORE
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
  const retanguloAltura = prompt('Digite a altura')
  const retanguloLargura = prompt('Digite a largura')

  const soma = retanguloAltura * retanguloLargura 
  console.log(soma)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite o ano atual')
  const dataNascimento = prompt('Digite seu ano de nascimento')
  const calculoIdade = anoAtual - dataNascimento

  console.log(calculoIdade)


}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)

  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite seu nome')
  const idade = prompt('Digite sua idade')
  const email = prompt('Digite seu email')


console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)


}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite sua primeira cor favorita")
  const cor2 = prompt("Digite sua segunda cor favorita")
  const cor3 = prompt("Digite sua terceira cor favorita")
  const cores = [cor1, cor2, cor3]

  console.log(cores)

 

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  return string.toUpperCase()
  

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  

  return custo / valorIngresso


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  
  return string1 > string2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  
  return array[0]

}



// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui 


  return array.pop()
  
  

}


// EXERCÍCIO 11 - RESOLVER
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  //Escreva uma função que recebe um array e retorna 
  //um array com o primeiro e o último elemento trocados.

   const ultimo = array[array.length -1]
   const primeiro = array[0]
   
   array[array.length - 1] = primeiro
   array[0] = ultimo
   return array
   
    
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

 

return string1.toLowerCase() === string2.toLowerCase() 

}

// EXERCÍCIO 13 - RESOLVER
function checaRenovacaoRG() {
  // implemente sua lógica aqui


}

// EXERCÍCIO 14 - RESOLVER
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15 - RESOLVER
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}