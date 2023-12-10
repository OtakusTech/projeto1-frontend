import React, { useState, useEffect} from 'react';
import './style.css';
import RegisterService from '../../services/registerService.js';
import { useNavigate } from "react-router-dom";
import LoginService from '../../services/loginService.js';
import { Card, CardBody } from 'reactstrap';
import Logo from '../../assets/logo/LOGO-PRINCIPAL.png'
import Button from '../../components/Button';

const Register = () =>{


    let history = useNavigate();

    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('Registering');

    useEffect(()=>{
        const myButton = document.getElementById('default-btn');
        if(loading){
            myButton.value = `${statusMessage}`;
        }
    }, [statusMessage])

    useEffect(()=> {
        var form = document.getElementById("register-form");
        function handleForm(event) { event.preventDefault(); } 
        form.addEventListener('submit', handleForm);
    },[])

    const registerUser = async function() {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        setLoading(true);
        setStatusMessage('Registering');
        let result = await RegisterService({
            "name":name,
            "email":email.toLowerCase(),
            "password":password
        
        });
        setStatusMessage('Logging in');

        if (result.data){
            let loginResult;
            loginResult = await LoginService({
                "email": email.toLowerCase(),
                "password": password
            });

            if (loginResult.data){
                history('/');
            }
        }

    };

    return(
        <>
            <div id="branding">
                <img src={Logo} class="logo-img"/>
                <p id="sub-title">Descubra seus animes favoritos</p>
            </div>
            <div id="form-container">
            <form onSubmit={registerUser} id="register-form">
                <input type="text" placeholder="Name" id="name"/>
                <input type="email" placeholder="E-mail" id="email"/>
                <input type="password" placeholder="Password" id="password"/>
                <Button 
                    color="#34004a"
                    label="REGISTRAR"
                />
            </form>
            <p>Já possui uma conta?</p>
            <span id="login" href="#" onClick={() => {
                history('/login')
            }}>Entrar</span>
            </div>
        </>
    )
}

export default Register;