import React, { useState, useEffect } from 'react';

function TrainerGetCourseForm() {
  const [courses, setCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isDeleting, setIsDeleting] = useState(false); // State to track delete operation

  // Function to fetch courses from the API
  const fetchCourses = async () => {
    try {
      // Retrieve token from localStorage
      const token1 = localStorage.getItem('Token');

      const response = await fetch('https://rz4gggsw-4522.inc1.devtunnels.ms/v1/trainers/get-courses', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token1}`
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

  // Function to handle update course action
  const handleUpdate = (CourseName) => {
    // Redirect to Update Course form with course object as parameter
    window.location.href = `/UpdateCourseForm?courseName=${encodeURIComponent(CourseName)}`;
  };

  // Function to handle delete course action
  const handleDelete = async (courseName) => {
    // Display confirmation alert before deleting
    const confirmDelete = window.confirm(`Are you sure you want to delete the course "${courseName}"?`);

    if (confirmDelete) {
      try {
        setIsDeleting(true); // Set isDeleting to true to show preloader

        // Retrieve token from localStorage
        const token1 = localStorage.getItem('Token');

        const response = await fetch(`https://rz4gggsw-4522.inc1.devtunnels.ms/v1/admin/delete-course/${courseName}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token1}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to delete course');
        }

        console.log('Course deleted successfully:', courseName);
          window.location.reload(); // Reload page after successful deletion of a course
        // Fetch courses again after successful deletion
        fetchCourses();
      } catch (error) {
        console.error('Error deleting course:', error);
      } finally {
        setIsDeleting(false); // Reset isDeleting after delete operation is completed
      }
    } else {
      console.log('Delete operation cancelled');
    }
  };

  useEffect(() => {
    // Fetch courses on component mount
    fetchCourses();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">Get Courses</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {isDeleting && <div className="text-center">Deleting...</div>} {/* Preloader */}
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
                <div className="d-flex justify-content-between mt-3">
                  <button className="btn btn-success" onClick={() => handleUpdate(course.CourseName)}>Update</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(course.CourseName)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainerGetCourseForm;








// import React, { useState, useEffect } from 'react';

// function TrainerGetCourseForm() {
//   const [courses, setCourses] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         // Retrieve token from localStorage
//         const token = localStorage.getItem('Token');

//         const response = await fetch('http://localhost:4522/v1/admin/get-courses', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
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

//     fetchCourses(); // Call the fetchCourses function
//   }, []); // Empty dependency array means this effect runs once after the initial render

//   const handleDelete = async (courseName) => {
//     // Display confirmation alert before deleting
//     const confirmDelete = window.confirm(`Are you sure you want to delete the course "${courseName}"?`);

//     if (confirmDelete) {
//       try {
//         // Retrieve token from localStorage
//         const token = localStorage.getItem('Token');

//         const response = await fetch(`http://localhost:4522/v1/admin/delete-course/${encodeURIComponent(courseName)}`, {
//           method: 'DELETE',
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Failed to delete course');
//         }

//         console.log('Course deleted successfully:', courseName);

//         // After deleting, fetch courses again to update the list
//         fetchCourses();
//       } catch (error) {
//         console.error('Error deleting course:', error);
//       }
//     } else {
//       console.log('Delete operation cancelled');
//     }
//   };

//   const handleUpdate = (courseName) => {
//     // Redirect to Update Course form with courseName parameter
//     window.location.href = `/UpdateCourseForm?courseName=${encodeURIComponent(courseName)}`;
//   };

//   return (
//     <div className="container">
//       <h2 className="text-center">Get Courses</h2>
//       {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//         {courses.map(course => (
//           <div className="col" key={course._id}>
//             <div className="card bg-secondary m-3">
//               <div className="card-body">
//                 <h3 className="card-title text-primary">{course.CourseName}</h3>
//                 <p className="card-text"><strong>Duration:</strong> {course.Duration}</p>
//                 <p className="card-text"><strong>Start Date:</strong> {course.Sdate}</p>
//                 <p className="card-text"><strong>End Date:</strong> {course.Edate}</p>
//                 <p className="card-text"><strong>Cost:</strong> {course.Cost}</p>
//                 <p className="card-text"><strong>Discount:</strong> {course.Discount}</p>
//                 <div className="d-flex justify-content-between mt-3">
//                   <button className="btn btn-success" onClick={() => handleUpdate(course.CourseName)}>Update</button>
//                   <button className="btn btn-danger" onClick={() => handleDelete(course.CourseName)}>Delete</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TrainerGetCourseForm;
