 //CODIGO OFICIAL FINALIZADO
 //codigo para iniciar o jogo
const project = confirm("Quer iniciar uma nova rodada?" + "\n" + "Want to start a new round?" )
console.log("Boas vindas ao jogo de Blackjack!" + "\n" + 
      "Welcome to the game of Blackjack!" )
   
if (project) {
   const user1 = comprarCarta(); //sorteando a carta 1 para o usuario
   const user2 = comprarCarta(); //sorteando a carta 2 para o usuario
    
   const pc1= comprarCarta(); //sorteando a carta 1 para o computador
   const pc2 = comprarCarta(); //sorteando a carta 2 para o computador

       //CALCULO DOS RESULTADOS DAS CARTAS   
   const CalculationUser = user1.valor + user2.valor //somar o valor da pontuacao
   const CalculationPc = pc1.valor + pc2.valor // ˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆ
            
   console.log(`User - Cards: ${user1.texto} ${user2.texto} - ${CalculationUser}`)//imprimindo carta do usuario 
   console.log(`Pc - Cards: ${pc1.texto} ${pc2.texto} - ${CalculationPc}`)// imprimindo carta do computador

    //CODIGO PARA O RESULTADO DO JOGO
    
if (CalculationUser === CalculationPc) {
       console.log("Empate" + "\n" + "The game tied")
   } else if (CalculationUser > CalculationPc) {
      console.log("O usuario ganhou!" + "\n" +  "User won!")
   } else if (CalculationUser < CalculationPc) {
      console.log("O computador ganhou!" + "\n" + "The computer won!")
   } 

 }
 console.log("O jogo acabou" + "\n" +  "The game is over")
     

    



   //CODIGO ANTIGO SEMANA 1(a logica nao emitia o resultado()) ---- COMPARACAO
   // //codigo para iniciar o jogo
   // if(confirm("Quer iniciar uma nova rodada?")) {
   //    console.log("Boas vindas ao jogo de Blackjack!")
   // } else {
   //    console.log("O jogo acabou")
   // }
     
   //  const usuario = comprarCarta(); //sorteando a carta para o usuario
   //  console.log("Usuario - cartas:", usuario.texto, "- pontuacao", usuario.valor)//imprimindo carta do usuario
   //  const pc = comprarCarta(); //sorteando a carta para o computador
   //  console.log("Computador - cartas:", pc.texto, "- pontuacao", pc.valor)// imprimindo carta do computador

   //  //CALCULO DOS RESULTADOS DAS CARTAS   
   //  const CalculoUsuario = usuario.texto + usuario.valor //somar o valor da pontuacao
   //  const CalculoPc = pc.texto + pc.valor // ˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆ
   
   //  //CODIGO EM FUNCAO PARA O RESULTADO DO JOGO
   //  const resultado = () => {
   //      if (CalculoUsuario === CalculoPc) {
   //             console.log("Empate")
   //       } else if (CalculoUsuario > CalculoPc) {
   //             console.log("O usuário ganhou!")
   //       } else if (CalculoUsuario < CalculoPc) {
   //                console.log("O computador ganhou!")
   //       }
   // }
    

   



