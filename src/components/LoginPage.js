
import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import '../styles/log.css';

const LoginPage = () => {
  const [loginId, setLoginId] = useState('');
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const showLoginLink = false;
  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/api/users/login?loginId=${loginId}`);
      const {userId,token} = response.data;
      localStorage.setItem('userId', userId);
      localStorage.setItem('loginId', loginId);
      localStorage.setItem('token', token);
      setUserId(userId);
      setMessage(`Hi, ${loginId}, you logged in successfully.`);
      
    } catch (error) {
      console.error('Login failed:', error);
      setMessage('Login failed. Please try again.');
    }
  };

  const handleLogout = () => {
    
    localStorage.removeItem('userId');
    localStorage.removeItem('loginId');
    localStorage.removeItem('token');

    setUserId('');
    setMessage('Logged out.');
  };

  
  const isLoggedIn = !!localStorage.getItem('token');


  return (
    <div className='page-container'>
        <div className='login-header'>
            <Header showAboutLink={true} showLoginLinkt={showLoginLink} />
        </div>
        <div className='login-container'>
          <div className='login-section'>
              <h1>Login</h1>
              <input
                type="text"
                placeholder="Login ID"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
              <p style={{ fontSize: '20px', padding: '20px'  }}>{message}</p>
              {isLoggedIn && (
                <div>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
          </div>
        </div>
    </div>
  );
};

export default LoginPage;

