import React, { Fragment } from 'react';
import '../../style/global.css';
import './login.css';
import { Link } from 'react-router-dom';
import loginimg from '../image/loginmanager_10029.png';

export function Login(){
          
    
    return (
        
        <div id="fundo-login">
            <form id="login">
                <div id="divisao7">
                    <img id="logo" src={loginimg} /> 
                </div>
                <div id="divisa01">  
                    <span id="title0">  Acesse sua conta</span>
                </div>
                <div id="divisa02">
                    <span id="sub-titlee">Seu e-mail</span><br/>
                    <input id="input-login0" type="text" placeholder="mercado@bestcart.com.br"
                    />
                </div>
                <div id="divisa03">
                    <span id="sub-titlee">Senha</span><br/>
                    <input id="input-login0" type="password" placeholder="Insira sua senha"
                    />
                    <span id="sub">Esqueceu a sua senha?</span>
                </div>
                <div id="divisao5">
                    <button  type="submit" id="btn-login">Login</button>
                </div> 
                <div id="divisao6">
                    <span id="sub-titlee">Não tem uma conta?</span> <Link id="link" to="/criarlogin"><span id="sub-title2">Cadastre-se</span></Link>
                </div>
            </form>
        </div>
    )
}