 //armazenando 
let usuarioCarta1 = [] 
let usuarioCarta2 = []
let computadorCarta1 = []
let computadorCart2 = []

 
 //codigo para iniciar o jogo             pular linha
 if(confirm("Bem vindo ao jogo BlackJack" + "\n" + "Quer iniciar uma nova rodada?")) {
   //SORTEAR 2 CARTAS
   usuarioCarta1.push(comprarCarta())
   usuarioCarta2.push(comprarCarta())
   computadorCarta1.push(comprarCarta())
   computadorCart2.push(comprarCarta())
   
   let cartasUsuario = [usuarioCarta1, usuarioCarta2]
   let cartasComputador = [computadorCarta1]

   console.log(cartasUsuario, cartasComputador)

 } else {
    alert("o jogo acabou")
 } 

// TENTAR USAR ESTRUTURA SWITE CASE =================================================
// if (usuario, computador){
//    (confirm("Suas cartas são:", usuario, "A carta revelada do computador é:", computador)
   
// }





// //CALCULO DOS RESULTADOS DAS CARTAS   
// const CalculoUsuario = usuario + usuario; //somar o valor da pontuacao
// const CalculoComputador = computador + computador; // ˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆ


/*
  //CODIGO EM FUNCAO PARA O RESULTADO DO JOGO
  const resultado = () => {
   if (CalculoUsuario === CalculoComputador) {
          console.log("Empate!")
    } else if (CalculoUsuario > CalculoComputador) {
          console.log("O usuário ganhou!")
    } else if (CalculoUsuario < CalculoComputador) {
             console.log("O computador ganhou!")
    }
}
 resultado()
 */
