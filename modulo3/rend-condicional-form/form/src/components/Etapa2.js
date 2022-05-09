import React from "react";
import styled from "styled-components";


const EtapaEstilo2 = styled.div`
text-align: center;
`
function Etapa2() {
  return (
    <EtapaEstilo2>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <h3>5. Qual curso?</h3>
         <input type="text" name="nome" />
         <h3>6. Qual unidade de ensino?</h3>
         <input type="text" name="idade" />
      
        
      
    </EtapaEstilo2>
  );
}

export default Etapa2;