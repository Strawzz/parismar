import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import '../styles/register.css';

const RegisterPage = () => {
const [loginId, setLoginId] = useState('');
const [name, setName] = useState('');
const [message, setMessage] = useState('');


const handleRegister = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:8080/api/users/register', null, {
            params: {
                loginId: loginId,
                name: name
            }
        });
    setMessage(response.data); 
    } catch (error) {
        setMessage('Registration failed. Please try again.'); 
        }
    };

    return (
        <div className='registerP-container'>
            <div className='registerHeader'>
                <Header showAboutLink={true} showLoginLink={true}/>
            </div>
            <div className='register-section'>
                <div className='registerTitle'>
                    <h2>Register</h2>
                </div>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Login ID"
                        value={loginId}
                        onChange={(e) => setLoginId(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit">Register</button>
                </form>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default RegisterPage;
