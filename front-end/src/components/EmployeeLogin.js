import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Login.css'; //

const EmployeeLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log("HandleSubmit Called")
    try {
      const response = await fetch('http://localhost:3001/api/v1/Employeelogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful');
        navigate('/emp/dashboard');
        console.log('Login successful', data);
      } else {
        alert('Login failed');
        console.error('Login failed', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <div className="title-container">
   
      <h2>Employee Login</h2></div>
      <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" >Login</button>
      </form>
    </div>
    </>
  );
};

export default EmployeeLogin;
