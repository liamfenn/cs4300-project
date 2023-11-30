import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/');
    // console.log('Form submitted'); // log when form is submitted
    // console.log('Email:', email); // log email state
    // console.log('Password:', password); // log password state

    // try {
    //   const response = await fetch('http://localhost:3001/api/users/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   if (!response.ok) {
    //     console.error('HTTP status:', response.status);
    //     throw new Error('HTTP error');
    //   }

    //   const data = await response.json();
    //   console.log('Response:', data); // log the response data

    //   if (response.ok) {
    //     setIsLoggedIn(true);
    //     navigate('/');
    //   } else {
    //     console.error('Login failed:', data.message);
    //   }
    // } catch (error) {
    //   console.error('Fetch error:', error);
    // }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>Enter account details below</p>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Login</button>
        <div className="login-footer">
          <span>Don't have an account? <a href="/signup">Sign-up</a></span>
          <span><a href="/forgot-password">Forgot Password?</a></span>
        </div>
        <div className="continue-as-guest">
          <a href="/">Continue as Guest</a>
        </div>
      </form>
    </div>
  );
};

export default Login;