import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext';
import axios from 'axios'; 

const Signup = () => {
  console.log("opened")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  // const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   console.error("Passwords don't match");
    //   return;
    // }
    // try {
    //   const signupResponse = await axios.post('/api/users/signup', {
    //     email,
    //     password,
    //     username,
    //   });
    //   setUserData({
    //     token: signupResponse.data.token,
    //     user: signupResponse.data.user,
    //   });
    //   localStorage.setItem('auth-token', signupResponse.data.token);
    //   navigate('/');
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
