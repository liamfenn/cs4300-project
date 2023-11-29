import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = ({ onLogin }) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    navigate('/');
  };

//     try {
//         const response = await fetch(loginEndpoint, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email, password }),
//         });
        
//     const data = await response.json();

//       if (response.ok) {
//         // Save the token and user details in localStorage or context
//         localStorage.setItem('token', data.token);
//         // Redirect to authenticated view or dashboard
//         navigate('/authenticated-view');
//       } else {
//         // Handle errors, such as displaying a message to the user
//         console.error('Login failed:', data.message);
//       }
//     } catch (error) {
//       // Handle network errors
//       console.error('Network error:', error);
//     }
//   };

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