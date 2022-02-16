import React, { useState, useEffect} from 'react';
import './style.css';
import RegisterService from '../../services/registerService.js';
import { useNavigate } from "react-router-dom";
import LoginService from '../../services/loginService.js';

const Register = () =>{


    let history = useNavigate();

    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('Registering');

    useEffect(() => {
        const myButton = document.getElementById('default-btn');

        if (loading){
            myButton.style.width = '7rem';
            myButton.value = `${statusMessage}`;
            myButton.disabled = true;
            myButton.style.background = 'rgb(167, 0, 0)';
            myButton.style.cursor = 'unset';
        }else{
            myButton.style.width = '19rem';
            myButton.value = 'Register';
            myButton.disabled = false;
            myButton.style.background = 'red';
            myButton.style.cursor = 'pointer';
        }
    }, [loading]);

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
                "email":email.toLowerCase(),
                "password":password
            });

            if (loginResult.data){
                history('/home');
            }
        }

    };

    return(
        <>
        <div id="branding">
            {/* <img src={Logo} alt="Eightnote logo" class="logo-img"/> */}
            <h1>Otakus Tech</h1>
            <p>Descubra seus animes favoritos.</p>
        </div>
        <div id="form-container">
        <form onSubmit={registerUser} id="register-form">
            <input type="text" placeholder="Name" id="name"/>
            <input type="email" placeholder="E-mail" id="email"/>
            <input type="password" placeholder="Password" id="password"/>
            <input type="submit" id="default-btn" value="Register" ></input>
        </form>
        <p>Já possui uma conta?</p>
        <span id="login" href="#" onClick={() => {
            history('./login')
        }}>Entrar</span>
        </div>
        </>
    )
}

export default Register;