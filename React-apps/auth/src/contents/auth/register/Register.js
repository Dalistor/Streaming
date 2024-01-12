import React, { useState, useEffect } from 'react';
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import adicional_style from './Register.module.css'

const Register = () => {
    const [data, setData] = useState(null)
    const [submit, setSubmit] = useState(false)
    const [aletMessage, setAlertMessage] = useState(null)

    // Pegar enviar e pegar dados para o backend a respeito do registro
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('/submit_register');
                setData(response.data);

                if (data !== null && data.result === 'error') {
                    setAlertMessage(data.error_message)
                }
            } catch (error) {
                console.log(error);
                setAlertMessage('Um erro aconteceu no sistema, tente novamente mais tarde')
            } finally {
                setSubmit(false)
            }
        };

        fetchData();
    }, [submit]);

    function submitHandler(event) {
        event.preventDefault()
        setSubmit(true)
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
                            <input type='text' className='form-control mb-2 mt-2' id='floatinginput' placeholder='Email' required />
                            <label for="floatinginput">Nome completo</label>
                        </div>
                        <div className='form-floating'>
                            <input type='email' className='form-control mb-2 mt-2' id='floatinginput' placeholder='Email' required />
                            <label for="floatinginput">Email</label>
                        </div>
                        <div className='form-floating'>
                            <input type='password' className='form-control mb-2 mt-2' id='floatinginput' placeholder='Senha' required />
                            <label for="floatinginput">Senha</label>
                        </div>
                        <div className='form-floating'>
                            <input type='password' className='form-control mb-2 mt-2' id='floatinginput' placeholder='Senha' required />
                            <label for="floatinginput">Repita sua senha</label>
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