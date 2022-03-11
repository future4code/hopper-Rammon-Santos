// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index) => {
//      console.log(item, index)
//   })
  //a) O que vai ser impresso no console?
  // nome e apelido de todos com os indices 


  // const usuarios = [
  //   { nome: "Amanda Rangel", apelido: "Mandi" },
  //   { nome: "Laís Petra", apelido: "Laura" },
  //   { nome: "Letícia Chijo", apelido: "Chijo" },
  // ]
  
  // const novoArrayB = usuarios.map((item, index, array) => {
  //    return item.nome
  // })
  
  // console.log(novoArrayB)

// a) O que vai ser impresso no console?
//imprime somente os itens

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// a) O que vai ser impresso no console?
// filtra mostra somente os itens que nao tem o apelido(negando) chijo 

//EXERCICIO ESCRITA


//1

// const pets = [
//   { nome: "Lupin", raca: "Salsicha"},
//   { nome: "Polly", raca: "Lhasa Apso"},
//   { nome: "Madame", raca: "Poodle"},
//   { nome: "Quentinho", raca: "Salsicha"},
//   { nome: "Fluffy", raca: "Poodle"},
//   { nome: "Caramelo", raca: "Vira-lata"},
// ]

//a) FINALIZADO__________________
  //  const arrayDoguinhos = pets.map((item, index) => {
  //    console.log(item.nome)
  //  })

//b) FINALIZADO__________________
  //  const arraySalsichas = pets.filter((item, index) => {
  //    return item.raca === "Salsicha"
  // })
  // console.log(arraySalsichas)
  
//c) FINALIZADO__________________
//   const arrayPoodle = pets.filter((item, index) => {
//     if (item.raca === "Poodle") {
//       console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
//     }
    
//  })



//2

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a) FINALIZADO__________________
// const imprimeItens = produtos.map((item) => {
//      return item.nome
//   })
// console.log(imprimeItens)

//b) FINALIZADO___________________________________ 
// const arrayCalculo = produtos.map((produto) => {
//   const desconto = (produto.preco * 5)/ 100;
//   const novoPreco = produto.preco - desconto;

//   const objeto = {
//     nome: produto.nome,
//     categoria: produto.categoria,
//     preco: novoPreco
//   }
//   return objeto
// })
// console.log(arrayCalculo)

// //c) FINALIZADO_____________
//   const arrayBebidas = produtos.filter((item, index) => {
//      return item.categoria === "Bebidas"
//   })
//   console.log(arrayBebidas)

//d) FINALIZADO____________
// const arrayYpes = produtos.filter((item, index) => {
//    return item.nome.includes("Ypê") 
// })
// console.log(arrayYpes)

// //e) FINALIZADO__________
//   const arrayYpes2 = produtos.filter((item, index) => {
//     if (item.nome.includes("Ypê")) {
//       console.log(`Compre ${item.nome} por ${item.preco}`)
//     }
    
//  })









  


  


 
  
  