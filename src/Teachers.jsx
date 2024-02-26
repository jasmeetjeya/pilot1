import React from 'react'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'
export const Teachers = () => {
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
                    <Link to="/Teachers" className="nav-item nav-link active">Teachers</Link>
                    <Link to="/Contact" className="nav-item nav-link">Contact</Link>
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
              <h3 className="display-4 text-white text-uppercase">Teachers</h3>
              <div className="d-inline-flex text-white">
                <p className="m-0 text-uppercase"><a className="text-white" href>Home</a></p>
                <i className="fa fa-angle-double-right pt-1 px-3" />
                <p className="m-0 text-uppercase">Teachers</p>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
      </div>


      {/* Team Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Teachers</h5>
            <h1>Meet Our Teachers</h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img className="img-fluid" src="img/team-1.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p className="m-0">Web Designer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img className="img-fluid" src="img/team-2.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p className="m-0">Web Designer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img className="img-fluid" src="img/team-3.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p className="m-0">Web Designer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img className="img-fluid" src="img/team-4.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p className="m-0">Web Designer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img className="img-fluid" src="img/team-1.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p className="m-0">Web Designer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img className="img-fluid" src="img/team-2.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p className="m-0">Web Designer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img className="img-fluid" src="img/team-3.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p className="m-0">Web Designer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img className="img-fluid" src="img/team-4.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p className="m-0">Web Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<Footer/>
    </div>
  )
}
