import React from 'react'
import { Link } from 'react-router-dom'

export default function 

() {
  return (
    <div>
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
                    <Link to="/" className="nav-item nav-link ">Home</Link>
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    <Link to="/Courses" className="nav-item nav-link">Courses</Link>
                    <Link to="/Teachers" className="nav-item nav-link">Teachers</Link>
                    <Link to="/Contact" className="nav-item nav-link">Contact</Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        
    </div>
  )
}
