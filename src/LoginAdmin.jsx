import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginAdmin() {
  const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();
  
  const handleLogin =  (e) => {
    e.preventDefault();
    try {
      if(email==="admin@gmail.com" && password==="admin"){
        navigate("/adminpanel")
      }
      else{
        setErrorMessage("Invalid Credentials")
      }
    } catch (error) {
      setErrorMessage("An Error Occured while logging in!")
      
    }
    
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className='text-center'> Admin Login</h2>
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

export default LoginAdmin;
