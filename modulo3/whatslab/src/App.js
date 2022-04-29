import React from 'react';
// import './App.css';
import Mensagens from './components/Mensagens.js';
import styled from 'styled-components';


const MainContainer = styled.div `
  background-color: #09202b;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`



function App() {
  return (
    <MainContainer>
      <div>
        <Mensagens />
      </div>
    </MainContainer>
  );
}

export default App;