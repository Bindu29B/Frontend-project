import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'user@example.com' && password === 'password123') {
      navigate('/welcome');
    } else {
      navigate('/login-failed');
    }
  };

  return (
    <div className='container'>
    <div className="login-page">
      <h2>Login Page</h2>
      <input
        type="email"
        placeholder="Enter the mail ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter the password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
};

export default LoginPage;
