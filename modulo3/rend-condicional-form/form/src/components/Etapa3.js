import React from "react";
import styled from "styled-components";


const EtapaEstilo3 = styled.div`
text-align: center;
`
function Etapa3() {
  return (
    <EtapaEstilo3>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <h3>5. Por que você não terminou um curso de graduação?</h3>
         <input type="text" name="nome" />
         <h3>6. Você fez algum curso complementar?</h3>
         <select>
            <option>Nenhum</option>
            <option>Sim</option>
         </select>
        
       
      
    </EtapaEstilo3>
  );
}

export default Etapa3;