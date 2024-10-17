import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import LoginFailPage from './Components/LoginFailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login-failed" element={<LoginFailPage />} />
        <Route
          path="/welcome"
          element={<div><h1 className='welcome-text'>Welcome!</h1></div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
