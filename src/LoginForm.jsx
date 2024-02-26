import React, { useState } from 'react';
function LoginForm() {
  const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
  const [phone, setphone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://ml8nmt7aw6.execute-api.ap-south-1.amazonaws.com/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, email, phone }),
      });

      if (!response.ok) {
        throw new Error('Login failed');

      }

      // Handle successful login
      const data = await response.json();
      console.log('Login successful:', data);
      setSuccessMessage('Login successful ! User Found');
      // // Check if JWT token is present in the response
      if (response.ok) {
        // Save the token to local storage for future use
        localStorage.setItem('token', data.token);
        // Redirect the user to the home page
        window.location.href = '/'; // Assuming 'Home.jsx' is rendered at '/' route
        setErrorMessage('');
      } else {
        throw new Error('JWT token not found in response');
        
      }
      // Clear any existing error message
      
      
    
      
    } catch (error) {
      
      setErrorMessage(error.message);
      console.log(error);
      // Clear any existing success message
      setSuccessMessage('');
      console.error('Login error:');
    }

    
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Login</h2>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
