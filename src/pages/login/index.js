import React, { useState, useEffect } from 'react';
import './style.css';
import LoginService from '../../services/loginService.js';
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo/LOGO-PRINCIPAL.png'
import Button from '../../components/Button';

const Login = () => {

    let history = useNavigate();

    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        var form = document.getElementById("login-form");
        function handleForm(event) { event.preventDefault(); } 
        form.addEventListener('submit', handleForm);
    },[]);

    const userLogin = async function() {
        let email = document.getElementById('email').value.toLowerCase();
        let password = document.getElementById('password').value;
        let result;

        setLoading(true);
        try{
            result = await LoginService({
                "email":email.toLowerCase(),
                "password":password
            
            });
        }catch(error){
            alert('Login ou senha incorretos: '+error);
        }
        
        if (result){
            history('/');
        }
        setLoading(false);

    };

    return (
        <>
            <div id="branding">
                <img src={Logo} className="logo-img"/>
                <p id='sub-title'>Descubra seus animes favoritos</p>
            </div>
            <div id="form-container">
            <form onSubmit={userLogin} id='login-form'>
                <input type="email" placeholder="E-mail" id="email"/>
                <input type="password" placeholder="Password" id="password"/>
                <Button 
                    color="#34004a"
                    label="LOGIN"
                />
                
            </form>
            <p>Ainda não possui uma conta?</p>
            <span id="register" onClick={() => {
                history('/register')}}>Registrar</span>
            </div>
        </>
    );
};

export default Login;