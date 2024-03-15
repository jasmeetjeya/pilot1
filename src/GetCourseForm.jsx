// import React, { useState, useEffect } from 'react';

// function GetCoursesForm() {
//   const [courses, setCourses] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         // Retrieve token from localStorage
//         const Token = localStorage.getItem('Token');

//         const response = await fetch('https://rz4gggsw-4522.inc1.devtunnels.ms/v1/admin/get-courses', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${Token}` // Include token in the Authorization header
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch courses');
//         }
        
//         const data = await response.json();
//         setCourses(data);
//         setErrorMessage('');
//       } catch (error) {
//         setErrorMessage(error.message);
//         console.error('Error fetching courses:', error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div>
//       <h2>Get Courses</h2>
//       {errorMessage && <div>{errorMessage}</div>}
//       <div className="card-container">
//         {courses.map(course => (
//           <div className="card" key={course._id}>
//             <h3>{course.CourseName}</h3>
//             <p><strong>Duration:</strong> {course.Duration}</p>
//             <p><strong>Start Date:</strong> {course.Sdate}</p>
//             <p><strong>End Date:</strong> {course.Edate}</p>
//             <p><strong>Cost:</strong> {course.Cost}</p>
//             <p><strong>Discount:</strong> {course.Discount}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default GetCoursesForm;

import React, { useState, useEffect } from 'react';

function GetCoursesForm() {
  const [courses, setCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Retrieve token from localStorage
        const Token = localStorage.getItem('Token');

        const response = await fetch('https://rz4gggsw-4522.inc1.devtunnels.ms/v1/admin/get-courses', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Token}` // Include token in the Authorization header
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        
        const data = await response.json();
        setCourses(data);
        setErrorMessage('');
      } catch (error) {
        setErrorMessage(error.message);
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">Get Courses</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {courses.map(course => (
          <div className="col" key={course._id}>
            <div className="card bg-secondary m-3">
              <div className="card-body">
                <h3 className="card-title text-primary">{course.CourseName}</h3>
                <p className="card-text"><strong>Duration:</strong> {course.Duration}</p>
                <p className="card-text"><strong>Start Date:</strong> {course.Sdate}</p>
                <p className="card-text"><strong>End Date:</strong> {course.Edate}</p>
                <p className="card-text"><strong>Cost:</strong> {course.Cost}</p>
                <p className="card-text"><strong>Discount:</strong> {course.Discount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetCoursesForm;
