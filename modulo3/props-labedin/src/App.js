import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';



const PagCompleta = styled.div`
 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    background-color: #1e2226;
    
`
const EstiloCardsBig = styled.div`
    width: 40vw;
    margin: 10px 0;
    h2 {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      text-align: center;
      margin-bottom: 20px;
      color: #e9e9e9;

    }
`


function App() {
  return (
    <PagCompleta>

      <EstiloCardsBig>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {`https://avatars.githubusercontent.com/u/72676484?s=400&u=bc49b40238a635df97f3179e2008ba176f2a0139&v=4`} 
          nome="RammonDev" 
          descricao="Olá, eu sou Rammon. Sou aluno da Labenu. Programador FULLSTACK em formação."
        />
        
        <ImagemButton 
          imagem="https://cdn.icon-icons.com/icons2/1509/PNG/512/viewmorehorizontal_104501.png" 
          texto="Ver mais"
        />
      </EstiloCardsBig>

      <div>
        <CardPequeno
          imagem2="https://cdn-icons-png.flaticon.com/512/561/561127.png"
          nome2= "Email:" 
          descricao2= "rammonlive@gmail.com"
        />
        <CardPequeno
          imagem2="https://cdn-icons-png.flaticon.com/512/3722/3722049.png"
          nome2= "Endereço:" 
          descricao2= "Brasil - Paraíba"
        />
      </div>

      <EstiloCardsBig>
        <h2>Experiências profissionais</h2>
        <CardGrande 
         imagem="https://yt3.ggpht.com/ytc/AKedOLSH-PUg_wTvKW7xAKL4PsXFV85N9Ys341g0WSVd=s900-c-k-c0x00ffffff-no-rj" 
         nome="Labenu" 
         descricao="Curso FULLSTACK jan de 2022 - fev de 2023"
        />
        
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkr4JIrvj_bb4qSeh6SKuQTqJUOD917BfsxPVxnlho8eGKErBJ6zPzGICri-iYjJQ-vJI&usqp=CAU" 
          nome="Photoshop" 
          descricao="Design intermediário" 
        />
      </EstiloCardsBig>

      <EstiloCardsBig>
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png" 
          texto="GitHub"
        />        

        <ImagemButton 
          imagem="https://icones.pro/wp-content/uploads/2021/02/instagram-icone-noir.png" 
          texto="Instagram" 
        />        
      </EstiloCardsBig>
    </PagCompleta>
  );
}

export default App;
