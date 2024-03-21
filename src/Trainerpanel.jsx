import React from 'react'
import { Link } from 'react-router-dom'
import './TrainerPanel.css';
import TrainerGetCourseForm from './TrainerGetCourseForm';
export default function TrainerPanel() {
  return (
   
        <>
         <div className="container-fluid d-none d-lg-block">
      <div className="row align-items-center py-2 px-xl-5">
        <div className="col-lg-12 d-flex justify-content-center">
          <a href="/" className="text-decoration-none">
            <h1 className="m-0"><span className="text-primary">Pilot</span> Brothers</h1>
          </a>
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
                  <div className="navbar-nav py-0 d-inline-flex align-items-center justify-content-end">
                    <Link to="/TrainerPanel" className="nav-item nav-link active spaced ">Course</Link>
                    <Link to="/GetTrainers" className="nav-item nav-link spaced">Trainers</Link>
                    <Link to="/UpdateCourseForm" className="nav-item nav-link spaced">Images </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* Navbar End */}
        <TrainerGetCourseForm/>






















        {/* <h3 className='text-center mt-5'>Admin Dashboard</h3>
        <div className="container text-center ">
            
            <div className="d-flex justify-content-around mt-5">
             <div className="col-lg-3 col-md-6 mb-4">
               <div className="cat-item position-relative overflow-hidden rounded mb-2">
                 <img className="img-fluid" src="img/cat-1.jpg" alt="" />
                 <Link className="cat-overlay text-white text-decoration-none" to="/addteacher">
                   <h4 className="text-white font-weight-medium">Add Teacher</h4>
                   
                 </Link>
               </div>
             </div>
             <div className="col-lg-3 col-md-6 mb-4">
               <div className="cat-item position-relative overflow-hidden rounded mb-2">
                 <img className="img-fluid" src="img/cat-2.jpg" alt="" />
                 <Link className="cat-overlay text-white text-decoration-none" to="/teacherschedule">
                   <h4 className="text-white font-weight-medium">Teacher Schedule</h4>
                  
                 </Link>
               </div>
             </div>
             <div className="col-lg-3 col-md-6 mb-4">
               <div className="cat-item position-relative overflow-hidden rounded mb-2">
                 <img className="img-fluid" src="img/cat-3.jpg" alt="" />
                 <Link className="cat-overlay text-white text-decoration-none" to="/addcourse">
                   <h4 className="text-white font-weight-medium">Add courses</h4>
                  
                 </Link>
               </div>
             </div>
             
             
             
             
             
           </div>
       </div> */}
        </>
  
    
  )
}
