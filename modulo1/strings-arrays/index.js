//EXERCICIO INTERPRETACAO 
/*
let array   // NAO POSSUI UM VALOR DE UMA VARIAVEL
console.log('a. ', array)

array = null        // NAO POSSUI UMA VARIAVEL
console.log('b. ', array) 

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11, quantidades de propriedades 

let i = 0
console.log('d. ', array[i]) 

array[i, 1] = "test" // array[i + 1]  tanto com + como virgula funciona
console.log('e. ', array)

const valor = array[i+7]
console.log('f. ', valor) // o i remove o elemento [9] pela propriedade 7 chegando ao 10
*/
//EXERCICIO INTERPRETACAO 2
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// //"SUBI NUM ÔNIBUS EM MIRROCOS" //27



//EXERCICIO DE ESCRITA DE CODIGO

// 1
/*
const nome = prompt("digite seu nome")
const email = prompt("digite seu email")

console.log(`O email ${email.trim()}, foi cadastrado com sucesso. Seja bem vinda(o), ${nome}`)
*/

//2.
/*parte 1
const comidasPreferidas = ["Pizza", "Acai", "Cachorro Quente Gil", "milho ", "carne"]

const lista = comidasPreferidas.entries()

/*
//console.log("Essas são as minhas comidas preferidas:", comidasPreferidas)

/* // parte 2
const comidaUsuario = prompt("Qual sua comida preferida?")

comidasPreferidas[1] = comidaUsuario



console.log("Essas são as minhas comidas preferidas:", comidasPreferidas)
*/


//  3.

 let listaDeTarefas 
 const tarefaDiaria1 = prompt("Digite sua primeira tarefa diaria")
 const tarefaDiaria2 = prompt("2 tarefa diaria")
 const tarefaDiaria3 = prompt("3 tarefa diaria")

 listaDeTarefas = [tarefaDiaria1, tarefaDiaria2, tarefaDiaria3]

 //console.log(listaDeTarefas)
 const tarefaRealizada = prompt("Qual indice de tarefa voce ja realizou?")

 

 console.log(listaDeTarefas.splice(0, 1, 2))
 console.log(listaDeTarefas)










