import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import iconeSalvar from './img/compartlharICONE.svg'


const MainContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'rammonr'}
          fotoUsuario={'https://avatars.githubusercontent.com/u/72676484?v=4'}
          fotoCompartilhar={iconeSalvar}
          fotoPost={'https://scontent.fjpa3-1.fna.fbcdn.net/v/t31.18172-8/20280299_1526619530720749_5881470068513796313_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=AyJcHZgeUm4AX-rGNeL&tn=xE7aYir_LFqHgaer&_nc_ht=scontent.fjpa3-1.fna&oh=00_AT_CAh1brtnN6ulGEHMWNXJIR_Lc34qBO1mjrwFo-Uaa7w&oe=628ED65C'}
        />
        
         
       

        <Post
          nomeUsuario={'heloyse_'}
          fotoUsuario={'https://scontent.fjpa3-1.fna.fbcdn.net/v/t1.6435-9/125382335_2772988246355896_4244530395564982631_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=U0tidg_e-rkAX-Jsfro&_nc_ht=scontent.fjpa3-1.fna&oh=00_AT85B6Xa5_3PLtKBaeT_IN8bjRf3xv76-590QKWK6mhr2g&oe=628E6B33'}
          fotoCompartilhar={iconeSalvar}
          fotoPost={'https://scontent.fjpa3-1.fna.fbcdn.net/v/t1.6435-9/125382335_2772988246355896_4244530395564982631_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=U0tidg_e-rkAX-Jsfro&_nc_ht=scontent.fjpa3-1.fna&oh=00_AT85B6Xa5_3PLtKBaeT_IN8bjRf3xv76-590QKWK6mhr2g&oe=628E6B33'}
        />
        <Post
          nomeUsuario={'bubabruno'}
          fotoUsuario={'https://scontent.fjpa3-1.fna.fbcdn.net/v/t1.6435-9/89318129_2848042968614986_4820210889716137984_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=LBw2BleNbr4AX__J2Jf&tn=xE7aYir_LFqHgaer&_nc_ht=scontent.fjpa3-1.fna&oh=00_AT-MHwikzAqViaXzCOK8UDZWdIf2DHOlyq630DkpdHDvBQ&oe=628E0803'}
          fotoCompartilhar={iconeSalvar}
          fotoPost={'https://scontent.fjpa3-1.fna.fbcdn.net/v/t1.18169-9/13119043_1050720548347246_8397677356621902355_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ddXgrRVa3LYAX8FsHEs&_nc_ht=scontent.fjpa3-1.fna&oh=00_AT8LzT3SxWYUtsr3Gf_taNMqpWAxGOkM4GQmszAzt5n9cg&oe=628E61C4'}
        />
        <Post
          nomeUsuario={'rayanderson_costa_'}
          fotoUsuario={'https://scontent.fjpa3-1.fna.fbcdn.net/v/t1.18169-9/12592613_498826150304329_7446866892069673217_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=exz-F1WZ-wwAX9EExfE&tn=xE7aYir_LFqHgaer&_nc_ht=scontent.fjpa3-1.fna&oh=00_AT8Js9CR0GZocPtVzXX958HFqDK-fyxSF9Cqj8wkP3yG1Q&oe=628C4D1F'}
          fotoCompartilhar={iconeSalvar}
          fotoPost={'https://scontent.fjpa3-1.fna.fbcdn.net/v/t31.18172-8/10838004_467549336765344_583871284299622239_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=9bF0ZVFCQ6QAX8hs0X3&_nc_ht=scontent.fjpa3-1.fna&oh=00_AT-eXQNn3kuQwlwpgqtwmQevT1ceYpRtsuTiiVmSdRqjdg&oe=628EF4FC'}
        />
      </MainContainer>
    );
  }
}

export default App;
