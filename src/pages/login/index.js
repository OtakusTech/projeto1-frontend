import React, { useState, useEffect } from 'react';
import './style.css';
import LoginService from '../../services/loginService.js';
import { useNavigate } from "react-router-dom";

const Login = () => {

    let history = useNavigate();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const myButton = document.getElementById('default-btn');

        if (loading){
            myButton.style.width = '7rem';
            myButton.value = 'Logging in';
            myButton.disabled = true;
            myButton.style.background = 'rgb(167, 0, 0)';
            myButton.style.cursor = 'unset';
        }else{
            myButton.style.width = '19rem';
            myButton.value = 'Login';
            myButton.disabled = false;
            myButton.style.background = 'red';
            myButton.style.cursor = 'pointer';
        }
    }, [loading]);

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
            history('/home');
        }
        setLoading(false);

    };

    return (
        <>
        <div id="branding">
            {/* <img src={Logo} alt="Eightnote logo" className="logo-img"/> */}
            <h1>Otakus Tech</h1>
            <p>Descubra seus animes favoritos</p>
        </div>
        <div id="form-container">
        <form onSubmit={userLogin} id='login-form'>
            <input type="email" placeholder="E-mail" id="email"/>
            <input type="password" placeholder="Password" id="password"/>
            <input type="submit" id="default-btn" value="Login"></input>
            
        </form>
        <p>Ainda não possui uma conta?</p>
        <span id="register" onClick={() => {
            history('/')}}>Registrar</span>
        </div>
        </>
    );
};

export default Login;