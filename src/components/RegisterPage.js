import React, { useState } from 'react';
import axios from 'axios';

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
        <div>
            <h2>Register</h2>
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
    );
};

export default RegisterPage;
