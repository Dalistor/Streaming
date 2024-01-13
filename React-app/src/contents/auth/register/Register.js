import React, { useState, useEffect } from 'react';
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import adicional_style from './Register.module.css'

const Register = () => {
    const [aletMessage, setAlertMessage] = useState(null)

    // Procura o prefixo correto para o token CSRF
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === name + '=') {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    // Pegar enviar e pegar dados para o backend a respeito do registro
    const fetchData = async () => {
        try {
            const csrftoken = getCookie('csrftoken')

            const response = await axios.post(
                '/auth/submit_register/',
                JSON.stringify({
                    'username': document.getElementById('nameInput').value,
                    'email': document.getElementById('emailInput').value,
                    'password': document.getElementById('passwordInput').value,
                    'confirmpassword': document.getElementById('confirmpasswordInput').value
                })
            );

            if (response.data.error_message) {
                setAlertMessage(response.data.error_message)
            }

        } catch (error) {
            console.log(error);
            setAlertMessage('Um erro aconteceu no sistema, tente novamente mais tarde')
        }
    }

    function submitHandler(event) {
        event.preventDefault()
        fetchData()
    }

    return (
        <div className={adicional_style['form-main']}>
            <div className={adicional_style['form-container']}>
                <form onSubmit={submitHandler}>
                    <h1 className='h3 fw-normal'>Registro</h1>
                    {
                        aletMessage !== null ? <div class="alert alert-danger" role="alert">
                            {aletMessage}
                        </div> : ''
                    }
                    <div>
                        <div className='form-floating'>
                            <input type='text' className='form-control mb-2 mt-2' id='nameInput' name='nameInput' placeholder='Email' required />
                            <label for="nameInput">Nome completo</label>
                        </div>
                        <div className='form-floating'>
                            <input type='email' className='form-control mb-2 mt-2' id='emailInput' name='emailInput' placeholder='Email' required />
                            <label for="emailInput">Email</label>
                        </div>
                        <div className='form-floating'>
                            <input type='password' className='form-control mb-2 mt-2' id='passwordInput' name='passwordInput' placeholder='Senha' required />
                            <label for="passwordInput">Senha</label>
                        </div>
                        <div className='form-floating'>
                            <input type='password' className='form-control mb-2 mt-2' id='confirmpasswordInput' name='confirmpasswordInput' placeholder='Senha' required />
                            <label for="confirmpasswordInput">Repita sua senha</label>
                        </div>
                    </div>

                    <p className='mt-2 mb-2'>Já tem uma conta? Faça <a href='/login' className='text-decoration-none'>Login aqui</a></p>
                    <button className='btn btn-primary w-100 py-2'>Registrar</button>
                </form>
            </div>
        </div>
    )
}

export default Register