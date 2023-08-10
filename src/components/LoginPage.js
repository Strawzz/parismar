// import React, { useState } from 'react';
// import axios from 'axios';


// const LoginPage = () => {
//   const [loginId, setLoginId] = useState('');

//   const handleLogin = async () => {
//     try {
     
//       const response = await axios.post(`http://localhost:8080/api/users/login?loginId=${loginId}`);
//       const token = response.data;
//       localStorage.setItem('token', token);
//       console.log(response.data);
//       // Redirect to a protected route
//       // For example, use react-router-dom's useHistory hook
//       // history.push('/dashboard');
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <input
//         type="text"
//         placeholder="Login ID"
//         value={loginId}
//         onChange={(e) => setLoginId(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

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
    <div>
      <div className='login-container'>
        <Header showAboutLink={true} showLoginLinkt={showLoginLink} />
            <h1>Login</h1>
            <input
              type="text"
              placeholder="Login ID"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <p>{message}</p>
            {isLoggedIn && (
              <div>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
      </div>
    </div>
  );
};

export default LoginPage;

