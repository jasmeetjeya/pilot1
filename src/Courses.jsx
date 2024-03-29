import React from 'react'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'
export const Courses = () => {
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
                    <Link to="/Courses" className="nav-item nav-link active">Courses</Link>
                    <Link to="/Teachers" className="nav-item nav-link">Trainers</Link>
                    <Link to="/Contact" className="nav-item nav-link">Contact</Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* Navbar End */}


        {/* Header Start */}
        <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
          <div className="container">
            <div className="d-flex flex-column justify-content-center" style={{ minHeight: '300px' }}>
              <h3 className="display-4 text-white text-uppercase">Courses</h3>
              <div className="d-inline-flex text-white">
                <p className="m-0 text-uppercase"><a className="text-white" href>Home</a></p>
                <i className="fa fa-angle-double-right pt-1 px-3" />
                <p className="m-0 text-uppercase">Courses</p>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
      </div>

      {/* Category Start */}
      <div className="container-fluid py-2">
        <div className="container pt-2 pb-1">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Subjects</h5>
            <h1>Explore Top Subjects</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="img/cat-1.jpg" alt="" />
                <a className="cat-overlay text-white text-decoration-none" href>
                  <h4 className="text-white font-weight-medium">Web Design</h4>
                  <span>100 Courses</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="img/cat-2.jpg" alt="" />
                <a className="cat-overlay text-white text-decoration-none" href>
                  <h4 className="text-white font-weight-medium">Development</h4>
                  <span>100 Courses</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="img/cat-3.jpg" alt="" />
                <a className="cat-overlay text-white text-decoration-none" href>
                  <h4 className="text-white font-weight-medium">Game Design</h4>
                  <span>100 Courses</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="img/cat-4.jpg" alt="" />
                <a className="cat-overlay text-white text-decoration-none" href>
                  <h4 className="text-white font-weight-medium">Apps Design</h4>
                  <span>100 Courses</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="img/cat-5.jpg" alt="" />
                <a className="cat-overlay text-white text-decoration-none" href>
                  <h4 className="text-white font-weight-medium">Marketing</h4>
                  <span>100 Courses</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="img/cat-6.jpg" alt="" />
                <a className="cat-overlay text-white text-decoration-none" href>
                  <h4 className="text-white font-weight-medium">Research</h4>
                  <span>100 Courses</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="img/cat-7.jpg" alt="" />
                <a className="cat-overlay text-white text-decoration-none" href>
                  <h4 className="text-white font-weight-medium">Content Writing</h4>
                  <span>100 Courses</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="img/cat-8.jpg" alt="" />
                <a className="cat-overlay text-white text-decoration-none" href>
                  <h4 className="text-white font-weight-medium">SEO</h4>
                  <span>100 Courses</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category End */}


      {/* Courses Start */}
      <div className="container-fluid py-2">
        <div className="container py-2">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Courses</h5>
            <h1>Our Popular Courses</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="rounded overflow-hidden mb-2">
                <img className="img-fluid" src="img/course-1.jpg" alt="" />
                <div className="bg-secondary p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                    <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
                  </div>
                  <a className="h5" href>Web design &amp; development courses for beginner</a>
                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                      <h5 className="m-0">$99</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="rounded overflow-hidden mb-2">
                <img className="img-fluid" src="img/course-2.jpg" alt="" />
                <div className="bg-secondary p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                    <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
                  </div>
                  <a className="h5" href>Web design &amp; development courses for beginner</a>
                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                      <h5 className="m-0">$99</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="rounded overflow-hidden mb-2">
                <img className="img-fluid" src="img/course-3.jpg" alt="" />
                <div className="bg-secondary p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                    <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
                  </div>
                  <a className="h5" href>Web design &amp; development courses for beginner</a>
                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                      <h5 className="m-0">$99</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="rounded overflow-hidden mb-2">
                <img className="img-fluid" src="img/course-4.jpg" alt="" />
                <div className="bg-secondary p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                    <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
                  </div>
                  <a className="h5" href>Web design &amp; development courses for beginner</a>
                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                      <h5 className="m-0">$99</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="rounded overflow-hidden mb-2">
                <img className="img-fluid" src="img/course-5.jpg" alt="" />
                <div className="bg-secondary p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                    <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
                  </div>
                  <a className="h5" href>Web design &amp; development courses for beginner</a>
                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                      <h5 className="m-0">$99</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="rounded overflow-hidden mb-2">
                <img className="img-fluid" src="img/course-6.jpg" alt="" />
                <div className="bg-secondary p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                    <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
                  </div>
                  <a className="h5" href>Web design &amp; development courses for beginner</a>
                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                      <h5 className="m-0">$99</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Courses End */}
      <Footer />
    </div>
  )
}
