import React from 'react'
import { Link } from 'react-router-dom'
import { Home } from './Home'
import { Footer } from './Footer'
export const Contact = () => {
  return (
    <div>
      <div>
        {/* Topbar Start */}
        <div className="container-fluid d-none d-lg-block">
          <div className="row align-items-center py-2 px-xl-5">
            <div className="col-lg-3">
              <a href className="text-decoration-none">
                <h1 className="m-0"><span className="text-primary">Pilot</span> Brothers</h1>
              </a>
            </div>
            <div className="col-lg-3 text-right">
              <div className="d-inline-flex align-items-center">
              </div>
            </div>
            <div className="col-lg-3 text-right">
              <div className="d-inline-flex align-items-center">
              </div>
            </div>
            <div className="col-lg-3 text-right">
              <div className="d-inline-flex align-items-center">
                <div className="d-inline-flex align-items-center justify-content-end">
                  <Link to="/Loginform" className="btn btn-primary py-2 px-4 ml-2 " >Login</Link>
                  <Link to="/Signupform" className="btn btn-primary py-2 px-4 ml-2 ">Signup</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Navbar Start */}
        <div className="container-fluid">
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
                    <Link to="/" className="nav-item nav-link">Home</Link>
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    <Link to="/Courses" className="nav-item nav-link">Courses</Link>
                    <Link to="/Teachers" className="nav-item nav-link">Trainers</Link>
                    <Link to="/Contact" className="nav-item nav-link active">Contact</Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* Header Start */}
        <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
          <div className="container">
            <div className="d-flex flex-column justify-content-center" style={{ minHeight: '300px' }}>
              <h3 className="display-4 text-white text-uppercase">Contact</h3>
              <div className="d-inline-flex text-white">
                <p className="m-0 text-uppercase"><Link to='/' className="text-white">Home</Link></p>
                <i className="fa fa-angle-double-right pt-1 px-3" />
                <p className="m-0 text-uppercase">Contact</p>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
        {/* Contact Start */}
        <div className="container-fluid ">
          <div className="container py-3">
            <div className="text-center mb-5">
              <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Contact</h5>
              <h1>Contact For Any Query</h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="contact-form bg-secondary rounded p-5">
                  <div id="success" />
                  <form name="sentMessage" id="contactForm" noValidate="novalidate">
                    <div className="control-group">
                      <input type="text" className="form-control border-0 p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <input type="email" className="form-control border-0 p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <input type="text" className="form-control border-0 p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <textarea className="form-control border-0 py-3 px-4" rows={5} id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="text-center">
                      <button className="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
        {/* Footer Start */}
       <Footer/>
      </div>

    </div>
  )
}
