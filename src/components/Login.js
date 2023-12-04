import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted'); // log when form is submitted
    console.log('Email:', email); // log email state
    console.log('Password:', password); // log password state

    try {
      const response = await fetch('http://localhost:3001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        console.error('HTTP status:', response.status);
        const data = await response.json();
        window.alert(data.msg);
        throw new Error('HTTP error');
      }

      const data = await response.json();
      console.log('Response:', data); // log the response data

      if (response.ok) {
        setIsLoggedIn(true);
        navigate('/');
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className="card">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 id="lg">Login</h1>
        <h3>Enter account details below</h3>
        <div class="input">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div class="input">
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button id="submitBtn" type="submit">Login</button>
          <div class="sign-up-div">
            <h4>Don't have an account?</h4>
            <a id="signupBtn" href="/signup">Sign-up</a>
          </div>

          <div id="guest-forgot">
            <h4><a class="ntd" id="forgot" href="/forgot-password">Forgot Password?</a></h4>
            <h4><a class="ntd" href="/">Continue as Guest</a></h4>
          </div>
      </form>
    </div>
  );
};

export default Login;