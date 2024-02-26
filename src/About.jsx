import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'
export const About = () => {
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
                  <Link to="/about" className="nav-item nav-link active">About</Link>
                  <Link to="/Courses" className="nav-item nav-link">Courses</Link>
                  <Link to="/Teachers" className="nav-item nav-link">Teachers</Link>
                  <Link to="/Contact" className="nav-item nav-link">Contact</Link>

                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Navbar End */}
      <div>
        <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
          <div className="container">
            <div className="d-flex flex-column justify-content-center" style={{ minHeight: '300px' }}>
              <h3 className="display-4 text-white text-uppercase">About</h3>
              <div className="d-inline-flex text-white">
                <p className="m-0 text-uppercase"><a className="text-white" href>Home</a></p>
                <i className="fa fa-angle-double-right pt-1 px-3" />
                <p className="m-0 text-uppercase">About</p>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
        {/* About Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <img className="img-fluid rounded mb-4 mb-lg-0" src="img/about.jpg" alt="" />
              </div>
              <div className="col-lg-7">
                <div className="text-left mb-4">
                  <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>About Us</h5>
                  <h1>Innovative Way To Learn</h1>
                </div>
                <p>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit dolor clita consetetur diam. Diam ut diam tempor no et, lorem dolore invidunt no nonumy stet ea labore, dolor justo et sit gubergren diam sed sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet</p>
                <a href className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
      </div>

      {/* Registration Start */}
      <div className="container-fluid bg-registration py-5" style={{ margin: '90px 0' }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Need Any Courses</h5>
                <h1 className="text-white">30% Off For New Students</h1>
              </div>
              <p className="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor</p>
              <ul className="list-inline text-white m-0">
                <li className="py-2"><i className="fa fa-check text-primary mr-3" />Labore eos amet dolor amet diam</li>
                <li className="py-2"><i className="fa fa-check text-primary mr-3" />Etsea et sit dolor amet ipsum</li>
                <li className="py-2"><i className="fa fa-check text-primary mr-3" />Diam dolor diam elitripsum vero.</li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="card border-0">
                <div className="card-header bg-light text-center p-4">
                  <h1 className="m-0">Sign Up Now</h1>
                </div>
                <div className="card-body rounded-bottom bg-primary p-5">
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control border-0 p-4" placeholder="Your name" required="required" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control border-0 p-4" placeholder="Your email" required="required" />
                    </div>
                    <div className="form-group">
                      <select className="custom-select border-0 px-4" style={{ height: '47px' }}>
                        <option selected>Select a course</option>
                        <option value={1}>Course 1</option>
                        <option value={2}>Course 1</option>
                        <option value={3}>Course 1</option>
                      </select>
                    </div>
                    <div>
                      <button className="btn btn-dark btn-block border-0 py-3" type="submit">Sign Up Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Registration End */}

      {/* Testimonial Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Testimonial</h5>
            <h1>What Say Our Students</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="owl-carousel testimonial-carousel">
                <div className="text-center">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                  <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                  <img className="img-fluid mx-auto mb-3" src="img/testimonial-1.jpg" alt="" />
                  <h5 className="m-0">Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="text-center">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                  <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                  <img className="img-fluid mx-auto mb-3" src="img/testimonial-2.jpg" alt="" />
                  <h5 className="m-0">Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="text-center">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                  <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                  <img className="img-fluid mx-auto mb-3" src="img/testimonial-3.jpg" alt="" />
                  <h5 className="m-0">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      <Footer />
    </div>
  )
}
