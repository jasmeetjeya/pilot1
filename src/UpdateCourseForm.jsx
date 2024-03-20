import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function UpdateCourseForm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const courseName = queryParams.get('courseName') || '';

  const [formData, setFormData] = useState({
    CourseName: courseName,
    Duration: '',
    Sdate: '',
    Edate: '',
    Cost: '',
    Discount: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const Token = localStorage.getItem('Token');
        const response = await fetch(`https://rz4gggsw-4522.inc1.devtunnels.ms/v1/admin/get-courses/${courseName}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${Token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch course details');
        }

        const courseData = await response.json();
        setFormData(courseData); // Set form data with the fetched course details
      } catch (error) {
        console.error('Error fetching course details:', error);
        setErrorMessage('Failed to fetch course details. Please try again.');
      }
    };

    fetchCourseDetails();
  }, [courseName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const Token = localStorage.getItem('Token');
      const response = await fetch(`https://rz4gggsw-4522.inc1.devtunnels.ms/v1/admin/update-course/${formData.CourseName}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to update course');
      }

      const data = await response.json();
      console.log('Updated course data:', data);
      setErrorMessage('');
      // Optionally, show success message or redirect
    } catch (error) {
      setErrorMessage('Failed to update course. Please try again.');
      console.error('Error updating course:', error);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="contact-form bg-secondary rounded p-5">
            <h2 className="text-center">Update Course</h2>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="CourseName">Course Name:</label>
                <input type="text" id="CourseName" name="CourseName" value={formData.CourseName} onChange={handleChange} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="Duration">Duration:</label>
                <input type="text" id="Duration" name="Duration" value={formData.Duration} onChange={handleChange} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="Sdate">Start Date:</label>
                <input type="text" id="Sdate" name="Sdate" value={formData.Sdate} onChange={handleChange} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="Edate">End Date:</label>
                <input type="text" id="Edate" name="Edate" value={formData.Edate} onChange={handleChange} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="Cost">Cost:</label>
                <input type="text" id="Cost" name="Cost" value={formData.Cost} onChange={handleChange} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="Discount">Discount:</label>
                <input type="text" id="Discount" name="Discount" value={formData.Discount} onChange={handleChange} className="form-control" />
              </div>
              {/* <button type="submit" className="btn btn-primary">Update</button> */}
              <button type="submit" className="btn btn-primary">Update</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateCourseForm;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// function UpdateCourseForm() {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const courseParam = queryParams.get('course');

//   let initialCourseData = {};
//   if (courseParam) {
//     try {
//       initialCourseData = JSON.parse(decodeURIComponent(courseParam));
//     } catch (error) {
//       console.error('Error parsing course data:', error);
//     }
//   }

//   console.log('initialCourseData:', initialCourseData);

//   const [formData, setFormData] = useState(initialCourseData);
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     setFormData(initialCourseData);
//   }, [initialCourseData]); // Update form data when initial course data changes

//   console.log('formData:', formData);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const Token = localStorage.getItem('Token');

//       const response = await fetch(`https://rz4gggsw-4522.inc1.devtunnels.ms/v1/admin/update-course/${formData.CourseName}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${Token}`
//         },
//         body: JSON.stringify(formData)
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update course');
//       }

//       const data = await response.json();
//       console.log('Updated course data:', data);
//       setErrorMessage('');
//       // Optionally, show success message or redirect
//     } catch (error) {
//       setErrorMessage('Failed to update course. Please try again.');
//       console.error('Error updating course:', error);
//     }
//   };

//   return (
//     <>
//       <div className="container py-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <div className="contact-form bg-secondary rounded p-5">
//               <h2 className="text-center">Update Course</h2>
//               {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="CourseName">Course Name:</label>
//                   <input type="text" id="CourseName" name="CourseName" value={formData.CourseName || ''} onChange={handleChange} className="form-control" />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="Duration">Duration:</label>
//                   <input type="text" id="Duration" name="Duration" value={formData.Duration || ''} onChange={handleChange} className="form-control" />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="Sdate">Start Date:</label>
//                   <input type="text" id="Sdate" name="Sdate" value={formData.Sdate || ''} onChange={handleChange} className="form-control" />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="Edate">End Date:</label>
//                   <input type="text" id="Edate" name="Edate" value={formData.Edate || ''} onChange={handleChange} className="form-control" />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="Cost">Cost:</label>
//                   <input type="text" id="Cost" name="Cost" value={formData.Cost || ''} onChange={handleChange} className="form-control" />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="Discount">Discount:</label>
//                   <input type="text" id="Discount" name="Discount" value={formData.Discount || ''} onChange={handleChange} className="form-control" />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Update</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default UpdateCourseForm;