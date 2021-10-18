import React, { Fragment } from 'react';
import '../../style/global.css';
import '../login/login.css';
import './criar_login.css';
import { Link } from 'react-router-dom';
import loginimg from '../image/loginmanager_10029.png';

export function CriarLogin(){
          
    return (
        
        <div id="fundo-login">
            <form id="criar">
            <div id="divisao7">
                    <img id="logo" src={loginimg} /> 
                </div>
                <div id="div0">
                    <span id="title0"> Crie sua conta</span>
                </div>
                <div id="div">
                    <span id="sub-title">Nome</span><br/>
                    <input id="input-login" type="text" placeholder="Insira seu nome"
                    />
                </div>
                <div id="div">
                    <span id="sub-title">Seu e-mail</span><br/>
                    <input id="input-login" type="text" placeholder="mercado@bestcart.com.br"
                    />
                </div>
                <div id="div">
                    <span id="sub-title">Senha</span><br/>
                    <input id="input-login" type="password" placeholder="Insira sua senha"
                    />
                    
                </div>
                <div id="div">
                    <span id="sub-title">Confirmar senha</span><br/>
                    <input id="input-login" type="password" placeholder="Confirme sua senha"
                    />
                    
                </div>
                <div id="div1">
                    <button id="btn-login">Cadastrar</button>
                </div>
                <div id="div2">
                    <span id="sub-title">Já tem uma conta?</span> <Link id="link" to="/"><span id="sub-title2">Faça o login</span></Link>
                </div>
            </form>
        </div>
    )
}