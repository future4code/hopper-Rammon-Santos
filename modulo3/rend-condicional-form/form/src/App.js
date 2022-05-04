import React from "react";
import Etapa1 from "./components/Etapa1";
// import Etapa2 from "./components/Etapa2";
// import Etapa3 from "./components/Etapa3";
// import Final from "./components/Final";
import styled from "styled-components";


const Container = styled.div`
text-align: center;
button{
  margin-top: 30px;
}
`

function App() {

  // state = {
  //   etapa: 1,
  // }


  // renderizaEtapa = () => {
  //   switch (this.state.etapa) {
  //     case 1:
  //       return <Etapa1 />;
  //     case 2:
  //       return <Etapa2 />;
  //     case 3:
  //       return <Etapa3 />;
  //     case 4:
  //       return <Final />;
  //     default:
  //       return <Final />;
  //   }
  // };

    return (
      <Container>
        {/* {this.renderizaEtapa()} */}
        <Etapa1 />
        <button>Próxima etapa</button>

      </Container>
    );

  
    
}

export default App;
