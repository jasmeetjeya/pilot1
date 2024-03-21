import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
function Trainer() {
  const [Token, setToken] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
//   const [phone, setphone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://rz4gggsw-4522.inc1.devtunnels.ms/v1/trainer/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Password, Email }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      // Handle successful login
      const data = await response.json();
      console.log(data.data)
      // Assuming the Token is in the 'Token' property of the response
      // const receivedToken = data['Token'];
  
      // Save the Token in state or wherever you need it
      // setToken(receivedToken);
    
      console.log('Login successful:', data);
      setSuccessMessage('Login successful ! User Found');
      setErrorMessage('');
      // Check if JWT Token is present in the response
      if (data.data.Token) {
        // Save the token in localStorage
        localStorage.setItem('Token', data.data.Token);

        // Save the Token to local storage for future use
        // localStorage.setItem('Token', receivedToken);
        // Redirect the user to the home page
        window.location.href = '/Trainerpanel'; // Assuming 'Home.jsx' is rendered at '/' route
        setErrorMessage('');
      } 
      // else {
      //   throw new Error('JWT Token not found in response');
      // }
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
    <div>
       <div className="container-fluid d-none d-lg-block py-2">
      <div className="row align-items-center py-2 px-xl-5">
        <div className="col-lg-12 d-flex justify-content-center"> {/* Added class d-flex justify-content-center */}
          <a href="#" className="text-decoration-none">
            <h1 className="m-0"><span className="text-primary">Pilot</span> Brothers (Admin)</h1>
          </a>
        </div>
      </div>
    </div>

      {/* Navbar Start */}
      {/* <div className="container-fluid">
        <div className="row border-top px-xl-5">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0"><span className="text-primary">Pilot</span> Brothers</h1>
              </a>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarCollapse">
                <div className="navbar-nav py-0">
                  <Link to="/" className="nav-item nav-link active">Home</Link>
                  <Link to="/about" className="nav-item nav-link">About</Link>
                  <Link to="/Courses" className="nav-item nav-link">Courses</Link>
                  <Link to="/Teachers" className="nav-item nav-link">Trainers</Link>
                  <Link to="/Contact" className="nav-item nav-link">Contact</Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div> */}

      {/* Header Start */}
      <div className="container-fluid page-header" style={{ marginBottom: '50px' }}>
        <div className="container">
          <div className="d-flex flex-column justify-content-center" style={{ minHeight: '200px' }}>
            <h3 className="display-4 text-white text-uppercase">Trainer Login</h3>
            <div className="d-inline-flex text-white">
            <p className="m-0 text-uppercase"><Link to='/' className="text-white">Home</Link></p>
              <i className="fa fa-angle-double-right pt-1 px-3" />
              <p className="m-0 text-uppercase">Trainer Login</p>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
      {/* Contact Start */}
      <div className="container-fluid">
        <div className="container">
          <div className="text-center mb-4">
            {/* <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Welcome Back</h5> */}
            <h4 className=" text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Login To Your Trainer Account</h4>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form bg-secondary rounded p-5">
                <div id="success" />

                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  {/* <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setphone(e.target.value)}
                      required
                    />
                  </div> */}

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="Password"
                      className="form-control"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Trainer;
