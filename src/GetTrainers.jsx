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

  const handleDelete = async (Phone) => {
    try {
      const Token = window.localStorage.getItem('Token');
      const response = await fetch(`https://rz4gggsw-4522.inc1.devtunnels.ms/v1/admin/delete-trainer/${Phone}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete trainer');
      }

      // If deletion is successful, filter out the deleted trainer from the state
      setTrainers(prevTrainers => prevTrainers.filter(trainer => trainer.Phone !== Phone));
      console.log('Trainer deleted successfully:', Phone);
    } catch (error) {
      console.error('Error deleting trainer:', error);
    }
  };

  return (
    <div>
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
                  <p className="card-text">Experience: {trainer.Experience} years</p>
                  <p className="card-text">Courses Taught:</p>
                  <ul className="list-group list-group-flush">
                    {trainer.CoursesList.map((course, index) => (
                      <li key={index} className="list-group-item">{course}</li>
                    ))}
                  </ul>
                  <p className="card-text">Permissions: {trainer.Permissions.join(', ')}</p>
                  <div className="d-flex justify-content-between mt-3">
                    <Link to={`/UpdateTrainerForm`} className="btn btn-success">Update</Link>
                    <button type="button" className="btn btn-danger" onClick={() => handleDelete(trainer.Phone)}>Delete</button>
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
