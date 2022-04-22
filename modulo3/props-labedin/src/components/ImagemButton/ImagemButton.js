import React from 'react';
import styled from 'styled-components';

const ContainerImgButton = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #e9e9e9;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    p{
        color: #e9e9e9;
    }

    img{
        width: 30px;
        margin-right: 10px;
    }
`

function ImagemButton(props) {
    return (
        <ContainerImgButton>
            <img src={ props.imagem } alt="img"/>
            <p>{ props.texto }</p>
        </ContainerImgButton>

    )
}

export default ImagemButton;