import React from 'react';
import styled from 'styled-components';

const BalaoDeMensagens = styled.div `
    background-color: #05433e;
    padding: 0.9em 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 1.3;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);

`


class Mensagens extends React.Component {
    state = {

        arrayDeMensagens: [
            {
                nomeUsuario: "",
                mensagem: ""
            }
        ],

        valorInputNome: "",
        valorInputMensagem: ""
    };


    adicionaMensagem = () => {
        const novaMensagem = {
            nomeUsuario: this.state.valorInputNome,
            mensagem: this.state.valorInputMensagem
        };

        const novasMensagens = [...this.state.arrayDeMensagens, novaMensagem];

        this.setState({arrayDeMensagens: novasMensagens});

        this.setState({valorInputNome: ""})
        this.setState({ valorInputMensagem: ""});

    }



    onChangeInputNome = (event) => {
        this.setState({valorInputNome: event.target.value});
    };



    onChangeInputMensagem = (event) => {
        this.setState ({valorInputMensagem: event.target.value});
    };


    render() {
       
        
        const listaDeComponentes = this.state.arrayDeMensagens.map((messagem) => {
            return (
                <p><b>{messagem.nomeUsuario}</b> {messagem.mensagem}</p>
            );

            
            
        }); 
        
        return (
            <div>
                <BalaoDeMensagens>{listaDeComponentes}</BalaoDeMensagens>

                <div>
                    <input
                    value={this.state.valorInputNome}
                    onChange={this.onChangeInputNome}
                    placeholder={"Nome"}
                    />
                    <input
                    value={this.state.valorInputMensagem}
                    onChange={this.onChangeInputMensagem}
                    placeholder={"Mensagem"}
                    />
                    <button onClick={this.adicionaMensagem}>Enviar</button>
                </div>
            </div>
        )
    }
}

export default Mensagens