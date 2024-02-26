import React from 'react'
import { Link } from 'react-router-dom'
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
                        <a className="btn btn-primary py-2 px-4 ml-2 " href="">Login</a>
                        <a className="btn btn-primary py-2 px-4 ml-2 " href="">Signup</a>
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
                    <Link to="/Teachers" className="nav-item nav-link">Teachers</Link>
                    <Link to="/Contact" className="nav-item nav-link active">Contact</Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* Header Start */}
        <div className="container-fluid page-header" style={{marginBottom: '90px'}}>
          <div className="container">
            <div className="d-flex flex-column justify-content-center" style={{minHeight: '300px'}}>
              <h3 className="display-4 text-white text-uppercase">Contact</h3>
              <div className="d-inline-flex text-white">
                <p className="m-0 text-uppercase"><a className="text-white" href>Home</a></p>
                <i className="fa fa-angle-double-right pt-1 px-3" />
                <p className="m-0 text-uppercase">Contact</p>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
        {/* Contact Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Contact</h5>
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
        <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{marginTop: '90px'}}>
          <div className="row pt-5">
            <div className="col-lg-7 col-md-12">
              <div className="row">
                <div className="col-md-6 mb-5">
                  <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: '5px'}}>Get In Touch</h5>
                  <p><i className="fa fa-map-marker-alt mr-2" /> GNA UNIVERSITY</p>
                  <p><i className="fa fa-phone-alt mr-2" />+012 345 67890</p>
                  <p><i className="fa fa-envelope mr-2" />info@example.com</p>
                  <div className="d-flex justify-content-start mt-4">
                    <a className="btn btn-outline-light btn-square mr-2" href="#"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-outline-light btn-square mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-outline-light btn-square mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                    <a className="btn btn-outline-light btn-square" href="#"><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: '5px'}}>Our Courses</h5>
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />Web Design</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />Apps Design</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />Marketing</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />Research</a>
                    <a className="text-white" href="#"><i className="fa fa-angle-right mr-2" />SEO</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 mb-5">
              <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: '5px'}}>Newsletter</h5>
              <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
              <div className="w-100">
                <div className="input-group">
                  <input type="text" className="form-control border-light" style={{padding: '30px'}} placeholder="Your Email Address" />
                  <div className="input-group-append">
                    <button className="btn btn-primary px-4">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{borderColor: 'rgba(256, 256, 256, .1) !important'}}>
          <div className="col-lg-7 text-center text-md-right">
            <ul className="nav d-inline-flex">
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">Privacy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">Terms</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">FAQs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">Help</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
