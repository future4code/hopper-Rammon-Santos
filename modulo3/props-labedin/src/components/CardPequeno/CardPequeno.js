import React from 'react';
import './CardPequeno.css'
// import styled from 'styled-components'


// const Smallcard = styled.div `
//     display: flex;
//     align-items: center;
//     border: 1px solid black;
//     padding: 20px 110px;
//     margin-bottom: 10px;
//     height: 80px;
    
// `

//  const SmallImg = styled.img`
//     width: 40px;
//     margin-right: 10px;
//     border-radius: 20%;
// `

// const SmallTexto = styled.h4`
//     margin-bottom: 1px;
//     margin-right: 5px;
// `

// const SmallDivTexto = styled.div`
//         display: flex;
//         justify-items: flex-start;
// `




function CardPequeno(props) {

    return (
        <div className='smallcard-container'>
            <img src={ props.imagem2 } alt="img" />
            <div>
                <h4>{ props.nome2 }</h4>
                <p>{ props.descricao2 }</p>
            </div>
        </div>
    )
}

export default CardPequeno;