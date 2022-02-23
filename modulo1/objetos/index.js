
//Exercícios de interpretação de código

//1
/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) //Virfinia Cavendish
console.log(filme.transmissoesHoje[2]) //Globo, 14h
*/

//2 
/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)//Juca, 3 , SRD
console.log(gato)// Juba, 3, SRD
console.log(tartaruga)// Jubo, 3, SRD
*/

//3
/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) false
console.log(minhaFuncao(pessoa, "altura"))// nao tem o objeto ALTURA e a propriedade
*/


//Exercícios de escrita de código
//__________________________________________

/*
//A)
const pessoa = {
    nome: "Bruno",
    apelidos: ["Buba", "Bulbasauro", "GordoGordo"]
}
const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`

//B)

const novaListaApelidos = {
    ...pessoa,
    apelidos: ["Catoco", "Nikonzeiro", "DeRepente"]
}

console.log("apelidos", pessoa)
console.log("novaListaApelidos", novaListaApelidos)
*/

//____________________________________________________

//2


//TESTE 1
//_____________
// const pessoa1 = {
//     nome: "Rammon", 
//     idade: 24, 
//     profissao: "Estudante"
 
// }
// const pessoa2 = {
//     nome: "Buba", 
//     idade: 29, 
//     profissao: "Fotografo"
 
// }


// const nomePessoas = pessoa1.nome
// console.log("nome Pessoas", [nomePessoas, pessoa1.nome.length -1, pessoa1.idade, pessoa1.profissao.length -1])

// const nomePessoas2 = pessoa2.nome
// console.log("nome Pessoas", [nomePessoas2, pessoa2.nome.length -1, pessoa2.idade, pessoa2.profissao.length -1])
//______________
//TESTE2

// const duasPessoas = [
//     {nome: "Rammon", idade: 24, profissao: "Estudante"},
//     {nome: "Buba", idade: 29, profissao: "Fotografo"}
// ]
// const nomes = duasPessoas
// console.log("nome pessoa1", [nomes[0])

//_____________________________________

//3.


const carrinho = [] 

const fruta = [
    {nome: "Limao", disponibilidade: true},
    {nome: "Banana", disponibilidade: true},
    {nome: "Abacaxi", disponibilidade: true}

 ]
const recebe = (fruta) => {
   
    carrinho.push(fruta)
} 
console.log(fruta)























