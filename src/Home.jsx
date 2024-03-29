import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'
export const Home = () => {
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
        </div>
        {/* Navbar End */}
     


      {/* Carousel Start */}
      <div className="container-fluid p-0 pb-5 mb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to={0} className="active" />
            <li data-target="#header-carousel" data-slide-to={1} />
            <li data-target="#header-carousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active" style={{minHeight: '300px'}}>
              <img className="position-relative w-100" src="img/3.jpg" style={{minHeight: '300px', objectFit: 'cover'}} />
              <div className="carousel-caption d-flex align-items-center justify-content-center">
                <div className="p-5" style={{width: '100%', maxWidth: '900px'}}>
                  <h5 className="text-white text-uppercase mb-md-3">Best Courses</h5>
                  <h1 className="display-3 text-white mb-md-4">Best Training Courses By Pilot Brothers</h1>
                  <a href className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                </div>
              </div>
            </div>
            <div className="carousel-item" style={{minHeight: '300px'}}>
              <img className="position-relative w-100" src="img/4.jpg" style={{minHeight: '300px', objectFit: 'cover'}} />
              <div className="carousel-caption d-flex align-items-center justify-content-center">
                <div className="p-5" style={{width: '100%', maxWidth: '900px'}}>
                  <h5 className="text-white text-uppercase mb-md-3">Best Courses</h5>
                  <h1 className="display-3 text-white mb-md-4">Best Firearm Training Courses</h1>
                  <a href className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                </div>
              </div>
            </div>
            <div className="carousel-item" style={{minHeight: '300px'}}>
              <img className="position-relative w-100" src="img/5.jpg" style={{minHeight: '300px', objectFit: 'cover'}} />
              <div className="carousel-caption d-flex align-items-center justify-content-center">
                <div className="p-5" style={{width: '100%', maxWidth: '900px'}}>
                  <h5 className="text-white text-uppercase mb-md-3">Best Courses</h5>
                  <h1 className="display-3 text-white mb-md-4">New Way To Learn Firearms</h1>
                  <a href className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}
      
      <div>
        {/* About Start */}
        <div className="container-fluid py-2">
          <div className="container py-2">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <img className="img-fluid rounded mb-4 mb-lg-0" src="img/about.jpg" alt="" />
              </div>
              <div className="col-lg-7">
                <div className="text-left mb-4">
                  <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>About Us</h5>
                  <h1>Innovative Way To Learn</h1>
                </div>
                <p>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit dolor clita consetetur diam. Diam ut diam tempor no et, lorem dolore invidunt no nonumy stet ea labore, dolor justo et sit gubergren diam sed sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet</p>
                <a href className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Category Start */}
        <div className="container-fluid py-2">
          <div className="container pt-5 pb-2">
            <div className="text-center mb-5">
              <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Subjects</h5>
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
      </div>
      {/* Courses Start */}
      <div className="container-fluid py-2">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Courses</h5>
            <h1>Our Popular Courses</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="rounded overflow-hidden mb-2">
                <img className="img-fluid" src="img/1.jpg" alt="" />
                <div className="bg-secondary p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                    <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
                  </div>
                  <a className="h5" href>Firearm Training courses for beginner</a>
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
                <img className="img-fluid" src="img/2.jpg" alt="" />
                <div className="bg-secondary p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                    <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
                  </div>
                  <a className="h5" href>Firearm Training courses for beginner</a>
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
                <img className="img-fluid" src="img/3.jpg" alt="" />
                <div className="bg-secondary p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                    <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
                  </div>
                  <a className="h5" href>Firearm Training courses for beginner</a>
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
                <img className="img-fluid" src="img/4.jpg" alt="" />
                <div className="bg-secondary p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                    <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
                  </div>
                  <a className="h5" href>Firearm Training courses for beginner</a>
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
                <img className="img-fluid" src="img/5.jpg" alt="" />
                <div className="bg-secondary p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                    <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
                  </div>
                  <a className="h5" href>Firearm Training courses for beginner</a>
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
                <img className="img-fluid" src="img/6.jpg" alt="" />
                <div className="bg-secondary p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                    <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
                  </div>
                  <a className="h5" href>Firearm Training courses for beginner</a>
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
       {/* Registration Start */}
       <div className="container-fluid bg-registration py-5" style={{margin: '30px 0'}}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Need Any Courses</h5>
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
                      <select className="custom-select border-0 px-4" style={{height: '47px'}}>
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

      {/* Team Start */}
      <div className="container-fluid py-2">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Trainers</h5>
            <h1>Meet Our Trainers</h1>
          </div>
          <div className="row  justify-content-center align-items-center">
           
            <div className="col-md-6 col-lg-3 text-center team mb-4 ">
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
      {/* Team End */}

      {/* Testimonial Start */}
      {/* <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Testimonial</h5>
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
      </div> */}
      {/* Testimonial End */}

{/* 
      Blog Start
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Our Blog</h5>
            <h1>Latest From Our Blog</h1>
          </div>
          <div className="row pb-3">
            <div className="col-lg-4 mb-4">
              <div className="blog-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                <a className="blog-overlay text-decoration-none" href>
                  <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                  <p className="text-primary m-0">Jan 01, 2050</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="blog-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="img/blog-2.jpg" alt="" />
                <a className="blog-overlay text-decoration-none" href>
                  <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                  <p className="text-primary m-0">Jan 01, 2050</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="blog-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                <a className="blog-overlay text-decoration-none" href>
                  <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                  <p className="text-primary m-0">Jan 01, 2050</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      Blog End */}
      <Footer/>
    </div>
  )
}
