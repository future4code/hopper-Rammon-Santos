import React from "react";
import styled from "styled-components";


const EtapaEstilo = styled.div`
text-align: center;
`
function Etapa1() {
  return (
    <EtapaEstilo>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <h3>1. Qual o seu nome?</h3>
         <input type="text" name="nome" />
         <h3>2. Qual a sua idade?</h3>
         <input type="text" name="idade" />
         <h3>3. Qual a seu email?</h3>
         <input type="text" name="email" />
         <h3>4. Qual sua escolaridade?</h3>
         <select>
        <option>Ensino médio incompleto</option>
        <option>Ensino médio completo</option>
        <option>Ensino superior incompleto</option>
        <option>Ensino superior completo</option>
        </select>
        
      
    </EtapaEstilo>
  );
}

export default Etapa1;