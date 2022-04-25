import React from 'react';
import styled from 'styled-components'


const Contato = styled.h4`
    color: #e9e9e9;
    margin-bottom: 23px;
    margin-right: 8px;
  
`
const ContainerPequeno = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #e9e9e9;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 30px;


    div {
        display: flex;
        justify-items: flex-start;
    }
    p {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        color: #80b3f3;
    }
`
const ContainerImg = styled.img`
    width: 30px;
    margin-right: 10px;
    
    
`


function CardPequeno(props) {

    return (
        <ContainerPequeno>
            <ContainerImg src={ props.imagem2 } alt="img" />
            <div>
                <Contato>{ props.nome2 }</Contato>
                <p>{ props.descricao2 }</p>
            </div>
        </ContainerPequeno>
    )
}

export default CardPequeno;