//EXERCICIO DE INTERPRETACAO 

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2)) // resultado 2 * 5 = 10
// console.log(minhaFuncao(10)) //resultado 10 * 5 = 50

// 2.
//  //variavel //       //valor da variavel receber//
// let textoDoUsuario = prompt("Insira um texto");

// //variavel da funcao//    //parametro//     
// const outraFuncao = function(texto) {
           
//            //funcao do parametro deixar tudo minusculo//
//            //includes procura e retorna true/false se possui a palabra "cenoura"
// 	return texto.toLowerCase().includes("cenoura")
    
    
// }

// //variavel obter texto//    
// const resposta = outraFuncao(textoDoUsuario)
// //imprimindo a resposta//
// console.log(resposta, textoDoUsuario.toLowerCase()) 
//  i.   Eu gosto de cenoura = Eu gosto de cenoura/true
// ii.  CENOURA é bom pra vista = cenoura é bom pra vista/true
// iii. Cenouras crescem na terra = Cenoura crescem na terra/false

// EXERCICIO DE ESCRITA DE CODIGO

// 1.


 //A)________________________________________________________________________
// const mostrarNoConsoleFrase = () => {
     
    
//     console.log("Eu sou Rammon, tenho 24 anos, moro na Paraíba e sou estudante.")

// }

// mostrarNoConsoleFrase()

//B)______________________________________________________________________
// const informacoes = (nome, idade, endereco, profissao) => {

//     nome = "Rammon"
//     idade = 24
//     endereco = "Paraiba"
//     profissao = "estudante"
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro na ${endereco} e sou ${profissao}`)

// }
// informacoes()





//2. 

//A)___________________________________________________________
// const numeros = (numero1, numero2) => {

//     const calculo = numero1 + numero2

//     return calculo


// }
// console.log(numeros(2, 5))

//B)__________________________________________________________

// const booleano = (numero3, numero4) => {

//     const resultado = numero3 === numero4

//     return resultado

// }
// console.log(booleano(3, 6))

//C)_____________________________________________________________


// const booleanoPar = (numero5, numero6) => {

//     const par = numero5 % numero6
//     return par

// }
// console.log(booleanoPar(4, 1))


//D NAOOOOOO RESOLVIIIIIIIIIIIIIIIII______________________________


// const mensagem = (texto) => {
     
//     texto = "Esta é uma MENSAGEM"

    
//     console.log()

// }
// mensagem()
///_________________________________________________________________


//3.

const numero1 = prompt("Digite um numero")
const numero2 = prompt("Digite outro numero")
const operacoes = (soma, subtracao, multiplicacao, divisao) => {
    
    soma = numero1 + numero2
    subtracao =  numero1 - numero2
    multiplicacao = numero1 * numero2
    divisao = numero1 / numero2
    
    console.log(soma, subtracao, multiplicacao, divisao)
    

}
operacoes()












