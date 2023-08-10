import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [loginId, setLoginId] = useState('');

  const handleLogin = async () => {
    try {
     
      const response = await axios.post(`http://localhost:8080/api/users/login?loginId=${loginId}`);
      const token = response.data;
      localStorage.setItem('token', token);
      console.log(response.data);
      // Redirect to a protected route
      // For example, use react-router-dom's useHistory hook
      // history.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Login ID"
        value={loginId}
        onChange={(e) => setLoginId(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
