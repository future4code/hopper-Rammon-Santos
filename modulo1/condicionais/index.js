//Exercícios de interpretação de código
/*

1.
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/
// a) Explique o que o código faz. Qual o teste que ele realiza? 
//calcula o resto da divisao do teste

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
//R. numero par

// c) Para que tipos de números a mensagem é "Não passou no teste"? 
//R. numero impar

//2.
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/

/*
a) Para que serve o código acima?
R. saber qual o preco da fruta

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
R. O preco da fruta é R$2.25

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem 
impressa no console se retirássemos o `break` que está logo acima do `default` 
(o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
R. O preco da fruta é de R$5.5. 
Valor 5.5, pois ele so para quando tiver um break

*/


// 3.
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
*/
/*
a) O que a primeira linha está fazendo?
R. Recebendo uma string e convertendo em numero

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? 
E se fosse o número -10?
R. mensagem esse numero passou no teste
R. erro

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
R. esta faltando o ELSE e tem dois console
*/






//Exercícios de escrita de código

//1. 
/*
const idadeUsuario = Number(prompt("Digite o primeiro número."))

if (idadeUsuario > 18) {
    console.log("Voce pode dirigir")
} else {
    console.log("Voce nao pode dirigir")
}
*/

//2.
/*
const turno = prompt("Digite seu turno do dia de estudo,letra M (matutino) ou V (Vespertino) ou N (Noturno).").toUpperCase()
const verificaTurno = (turno) => {
    if (turno === "N") {
        console.log("Boa noite")
    } 
    if (turno === "V") {
        console.log("Boa tarde")
    } 
    else if (turno === "M") {
            console.log("Bom dia")
        }
}
verificaTurno(turno)
*/


//3. 
//switch case
/*
const turno = prompt("Digite seu turno do dia de estudo,letra M (matutino) ou V (Vespertino) ou N (Noturno).").toUpperCase()

switch (turno) {
    case "M":
    console.log("Bom dia")
    break

    case "V":
    console.log("Boa tarde")
    break
    
    case "N": 
    console.log("Boa noite")
    break
    
    default :
    console.log("Turno nao encontrado, digite novamente")
    break
}
*/

//4.
/*
const nomeDoFilme = prompt ("Qual genero do filme que irá assistir?")
const precoDoFilme = Number(prompt("Qual o preco do ingresso"))

const verificaFilme = (filme, preco) => {
        if (filme === "fantasia", preco <= "15") {
        console.log("Bom filme")
    } 
    else {
            console.log("Escolha outro filme :(")
        }
} 
verificaFilme(nomeDoFilme, precoDoFilme)
*/

//______________________________________________







//DESAFIOS____________________________________

//1.
/*
const nomeDoFilme = prompt ("Qual genero do filme que irá assistir?")
const precoDoFilme = Number(prompt("Qual o preco do ingresso"))
const lanche = prompt("Qual lanchinho voce vai comprar?")

const verificaFilme = (filme, preco) => {
        if (filme === "fantasia", preco <= "15") {
        console.log(`Bom filme e aproveite o seu ${lanche}`)
    } 
    else {
            console.log("Escolha outro filme :(")
        }
} 
verificaFilme(nomeDoFilme, precoDoFilme)
*/



//2. INCOMPLETO________________________________________
/*
const nomeCompleto = prompt("Digite seu nome completo")
const tipoDeJogo = prompt("digite o tipo de jogo: IN indica internacional; e DO indica doméstico; ")
const etapaDoJogo = prompt("Digite a etapa do jogo:  SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final ")
const categoriaDoJogo = Number(prompt("Digite a categoria: 1, 2, 3, 4"))
const quantidadeIngressos = Number(prompt("Quantos ingressos voce quer?"))

const jogos = (nome, jogo, etapa, categoria, quantidade) => {
    nome = nomeCompleto // prompt
    jogo = tipoDeJogo // ok
    etapa = etapaDoJogo // ok
    categoria = categoriaDoJogo // ok
    quantidade = quantidadeIngressos // number prompt

    switch (jogos) {
        case "DO":
            console.log("Jogo Nacional")
        break
        case "IN":
            console.log("Jogo Internacional")
        case "SF":
            console.log("SemiFinais")
        break
        case "DT":
            console.log("Decisao do 3 lugar")
        break
        case "FI": 
            console.log("Final")
        break
        case "1":
            console.log("Categoria 1")
        break
        case "2":
            console.log("Categoria 2")
        break
        case "3":
            console.log("Categoria 3")
        break                        
        default :
        console.log("digite novamente")
        break
    }
   
    

}
console.log("---Dados da compra---")
jogos(`Nome do cliente: ${nome}`)
jogos(`Tipo do jogo: ${tipoDeJogo}`)
jogos(`Etapa do jogo: ${etapaDoJogo}`)
jogos(`Categoria: ${categoriaDoJogo}`)
jogos(`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
console.log("----Valores----")
jogos(`Valor do ingresso: R$1980 `)
jogos("Valor TOTAL:" (quantidadeIngressos * 1980))
*/
