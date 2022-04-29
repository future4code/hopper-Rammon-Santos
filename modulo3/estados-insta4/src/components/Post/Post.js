import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite_border_white_24dp.svg'
import iconeCoracaoPreto from '../../img/favorite_white_24dp.svg'
import iconeComentario from '../../img/chat_bubble_outline_white_24dp.svg'
import iconeSalvar from '../../img/bookmark_white_24dp.svg'
import iconeSalvar2 from '../../img/bookmark_border_white_24dp.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  /* border: 1px solid gray; */
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right:  1px;
  
  p{
    color: white;
    padding-right: 160px ;
  }
`




const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
 

  
  
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvando: false,
    numeroSalvos: 0
  }

  onClickSalvar = () => {
    console.log('salvo')

    let numeroNovoSalvo

    if(this.state.salvando) {
      numeroNovoSalvo  = this.state.numeroSalvos - 1
    } else {
      numeroNovoSalvo  = this.state.numeroSalvos + 1
    }

    this.setState({
      salvando: !this.state.salvando,
      numeroSalvos: numeroNovoSalvo
    })
  }
  onClickCurtida = () => {
    console.log('Curtiu!')

    let numeroNovoCurtida 

    if(this.state.curtido) {
      numeroNovoCurtida  = this.state.numeroCurtidas - 1
    } else {
      numeroNovoCurtida  = this.state.numeroCurtidas + 1
    }


    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: numeroNovoCurtida
    })
    
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    } 

    let iconeSalvando

    if(this.state.salvando) {
      iconeSalvando = iconeSalvar
    } else {
      iconeSalvando = iconeSalvar2
    }
 
    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
        <UserPhoto src={this.props.fotoCompartilhar} alt={'Imagem compartilhamento'}/>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        <IconeComContador
          icone={iconeSalvando}
          onClickIcone={this.onClickSalvar}
          valorContador={this.state.numeroSalvos}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post