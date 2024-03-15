import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AddTrainerForm() {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    Trainer_Name: '',
    Email: '',
    Phone: '',
    Password: '',
    Experience: '',
    CoursesList: [],
    Permissions: []
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const Token = window.localStorage.getItem('Token');
        const response = await fetch('https://rz4gggsw-4522.inc1.devtunnels.ms/v1/admin/get-courses', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Token}`
          }
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
  
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
  
    fetchCourses();
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const value = e.target.value;

    if (checked) {
      setFormData(prevState => ({
        ...formData,
        [name]: [...prevState[name], value]
      }));
    } else {
      setFormData(prevState => ({
        ...formData,
        [name]: prevState[name].filter(item => item !== value)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const Token = window.localStorage.getItem('Token');
      const response = await fetch('https://rz4gggsw-4522.inc1.devtunnels.ms/v1/admin/add-trainer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log('Trainer added:', data);
      // Reset form data or show success message
    } catch (error) {
      console.error('Error adding trainer:', error);
      // Handle error
    }
  };

  return (
    <div>
      <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center py-2 px-xl-5">
          <div className="col-lg-12 d-flex justify-content-center">
            <a href="/" className="text-decoration-none">
              <h1 className="m-0"><span className="text-primary">Pilot</span> Brothers</h1>
            </a>
          </div>
        </div>
      </div>
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
                  <Link to="/AdminPanel" className="nav-item nav-link active spaced ">Add Course</Link>
                  <Link to="/AddTrainerForm" className="nav-item nav-link spaced">Add Trainers</Link>
                  <Link to="/Courses" className="nav-item nav-link spaced">Images </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form bg-secondary rounded p-5">
              <div className="text-center">
                <h2>Add Trainer</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="Trainer_Name">Trainer Name:</label>
                  <input type="text" id="Trainer_Name" name="Trainer_Name" value={formData.Trainer_Name} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="Email">Email:</label>
                  <input type="email" id="Email" name="Email" value={formData.Email} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="Phone">Phone:</label>
                  <input type="tel" id="Phone" name="Phone" value={formData.Phone} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="Password">Password:</label>
                  <input type="password" id="Password" name="Password" value={formData.Password} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="Experience">Experience:</label>
                  <input type="text" id="Experience" name="Experience" value={formData.Experience} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label>Courses List:</label><br />
                  {courses.length > 0 && courses.map(course => (
                    <div key={course._id} className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        id={course._id}
                        name="CoursesList"
                        value={course.CourseName}
                        onChange={handleCheckboxChange}
                        className="form-check-input"
                      />
                      <label htmlFor={course._id} className="form-check-label">{course.CourseName}</label>
                    </div>
                  ))}
                </div>
                <div className="form-group">
                  <label>Permissions:</label><br />
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      id="Read"
                      name="Permissions"
                      value="Read"
                      onChange={handleCheckboxChange}
                      className="form-check-input"
                    />
                    <label htmlFor="Read" className="form-check-label">Read</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      id="Write"
                      name="Permissions"
                      value="Write"
                      onChange={handleCheckboxChange}
                      className="form-check-input"
                    />  
                    <label htmlFor="Write" className="form-check-label">Write</label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTrainerForm;


// import React, { useState } from 'react';

// function AddTrainerForm({ courses }) {
//   const [trainerData, setTrainerData] = useState({
//     Trainer_Name: '',
//     Email: '',
//     Phone: '',
//     Password: '',
//     Experience: '',
//     CoursesList: [],
//     Permissions: ['Read', 'Write']
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTrainerData({ ...trainerData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const Token = window.localStorage.getItem('Token');
//       const response = await fetch('https://rz4gggsw-4522.inc1.devtunnels.ms/v1/admin/add-trainer', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${Token}`
//         },
//         body: JSON.stringify(trainerData)
//       });
//       const data = await response.json();
//       console.log('Trainer added:', data);
//       // Reset form data or show success message
//     } catch (error) {
//       console.error('Error adding trainer:', error);
//       // Handle error
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="text-center">Add Trainer</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="Trainer_Name">Trainer Name:</label>
//           <input type="text" id="Trainer_Name" name="Trainer_Name" value={trainerData.Trainer_Name} onChange={handleChange} className="form-control" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="Email">Email:</label>
//           <input type="email" id="Email" name="Email" value={trainerData.Email} onChange={handleChange} className="form-control" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="Phone">Phone:</label>
//           <input type="tel" id="Phone" name="Phone" value={trainerData.Phone} onChange={handleChange} className="form-control" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="Password">Password:</label>
//           <input type="password" id="Password" name="Password" value={trainerData.Password} onChange={handleChange} className="form-control" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="Experience">Experience:</label>
//           <input type="text" id="Experience" name="Experience" value={trainerData.Experience} onChange={handleChange} className="form-control" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="CoursesList">Courses List:</label>
//           <select id="CoursesList" name="CoursesList" value={trainerData.CoursesList} onChange={handleChange} className="form-control" multiple required>
//           {courses && courses.map(course => (
//   <option key={course._id} value={course.CourseName}>{course.CourseName}</option>
// ))}

//           </select>
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default AddTrainerForm;
