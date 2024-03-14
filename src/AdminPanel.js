import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminPanel() {
  return (
   
        <>
        <h3 className='text-center mt-5'>Admin Dashboard</h3>
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
       </div>
        </>
  
    
  )
}
