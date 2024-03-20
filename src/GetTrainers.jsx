import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function GetTrainers() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const Token = window.localStorage.getItem('Token');
        const response = await fetch('https://rz4gggsw-4522.inc1.devtunnels.ms/v1/admin/get-trainers', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch trainers');
        }

        const data = await response.json();
        console.log('Fetched trainers:', data); // Log fetched data
        setTrainers(data);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    };

    fetchTrainers();
  }, []);

  const handleDelete = async (id) => {
    try {
      // Implement delete functionality
      console.log("Deleting trainer with ID:", id);
    } catch (error) {
      console.error('Error deleting trainer:', error);
    }
  };

  return (
    <div>
      <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center py-2 px-xl-5">
          <div className="col-lg-12 d-flex justify-content-center">
            <Link to="/" className="text-decoration-none">
              <h1 className="m-0"><span className="text-primary">Pilot</span> Brothers</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row border-top px-xl-5">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <Link to="/" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0"><span className="text-primary">Pilot</span> Brothers</h1>
              </Link>
              <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarCollapse">
                <div className="navbar-nav py-0 d-inline-flex align-items-center justify-content-end">
                  <Link to="/AdminPanel" className="nav-item nav-link spaced">Add Course</Link>
                  <Link to="/AddTrainerForm" className="nav-item nav-link spaced">Add Trainers</Link>
                  <Link to="/Courses" className="nav-item nav-link active spaced">Images</Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="text-center">Get Trainers</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {trainers.map(trainer => (
            <div key={trainer._id} className="col">
              <div className="card bg-secondary m-3">
                <div className="card-body">
                  <h3 className="card-title">{trainer.Trainer_Name}</h3>
                  <p className="card-text">Email: {trainer.Email}</p>
                  <p className="card-text">Phone: {trainer.Phone}</p>
                  <p className="card-text">Experience: {trainer.Experince} years</p>
                  <p className="card-text">Courses Taught:</p>
                  <ul className="list-group list-group-flush">
                    {trainer.CoursesList.map((course, index) => (
                      <li key={index} className="list-group-item">{course}</li>
                    ))}
                  </ul>
                  <p className="card-text">Permissions: {trainer.Permissions.join(', ')}</p>
                  <div className="d-flex justify-content-between mt-3">
                    <Link to={`/UpdateTrainerForm`} className="btn btn-success">Update</Link>
                    <button type="button" className   ="btn btn-danger" onClick={() => handleDelete(trainer._id)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GetTrainers;
