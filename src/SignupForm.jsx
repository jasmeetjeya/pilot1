import React, { useState } from 'react';
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validation: Check if required fields are not empty
      for (const key in formData) {
        if (formData[key] === '') {
          throw new Error('Please fill in all required fields.');
        }
      }

      // Make API call for signup
      const response = await fetch('https://ml8nmt7aw6.execute-api.ap-south-1.amazonaws.com/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        throw new Error('Signup failed');
      }

      setSuccessMessage('Signup successful!');
      if (response.ok) {
        // Save the token to local storage for future use
        // localStorage.setItem('token', data.token);
        // Redirect the user to the home page
        window.location.href = '/'; // Assuming 'Home.jsx' is rendered at '/' route
        setErrorMessage('');
      } else {
        throw new Error('JWT token not found in response');
        
      }

    } catch (error) {
      setErrorMessage(error.message);
      console.error('Signup error:', error);
    }
  };

  return (

    <div>
    <Navbar/>

      {/* Header Start */}
      <div className="container-fluid page-header" style={{ marginBottom: '20px' }}>
        <div className="container">
          <div className="d-flex flex-column justify-content-center" style={{ minHeight: '300px' }}>
            <h3 className="display-4 text-white text-uppercase">Signup</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><a className="text-white" href>Home</a></p>
              <i className="fa fa-angle-double-right px-3" />
              <p className="m-0 text-uppercase">Signup</p>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
      {/* Contact Start */}
      <div className="container-fluid">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>SIGN UP</h5>
            <h1>Sign Up Your Account</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form bg-secondary rounded p-5">
                <div id="success" />
                  {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                  {successMessage && <div className="alert alert-success">{successMessage}</div>}
                  <form onSubmit={handleSubmit}>
                    <div className="control-group">
                      <label>First Name:</label>
                      <input
                        type="text"
                        className="form-control border-0 p-2"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name:</label>
                      <input
                        type="text"
                        className="form-control border-0 p-2"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email:</label>
                      <input
                        type="text"
                        className="form-control border-0 p-2"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone:</label>
                      <input
                        type="text"
                        className="form-control border-0 p-2"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Password:</label>
                      <input
                        type="password"
                        className="form-control border-0 p-2"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div class="text-center">
                    <button type="submit" className="btn btn-primary py-3 px-5">Signup</button>
                    </div>
                  </form>
                </div>
            </div>
          </div>

        </div>


        {/* Contact End */}


      </div>
    </div>
  );
}

export default SignupForm;
