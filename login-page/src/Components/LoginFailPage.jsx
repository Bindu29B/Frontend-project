import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginFailPage = () => {
  const navigate = useNavigate();

  return (
    <div className="login-fail-page">
      <h2>Login failed!</h2>
      <button onClick={() => navigate('/')}>Login</button>
      <button onClick={() => navigate('/signup')}>Sign Up</button>
    </div>
  );
};

export default LoginFailPage;
