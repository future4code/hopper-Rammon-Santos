import React from 'react';
import styled from 'styled-components';

const TextoH4 = styled.h4`
    display: flex;
    align-items: center;
    margin-bottom: 1px;
    color: #e9e9e9;

`
const ConteinerBig = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #e9e9e9;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 70px;

    div{
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
        p{
            color:#80b3f3 ;
        }
    
    }
`
const CardBigImg = styled.img`
    width: 80px;
    margin-right: 10px;
    border-radius: 80%;
`

function CardGrande(props) {
    return (
        <ConteinerBig>
            <CardBigImg src={ props.imagem } alt="img" />
            <div>
                <TextoH4>{ props.nome }</TextoH4>
                <p>{ props.descricao }</p>
            </div>
        </ConteinerBig>
    )
}

export default CardGrande;