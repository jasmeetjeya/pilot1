import React, { useState, useEffect } from 'react';

function UpdateTrainerForm() {
  const [trainerData, setTrainerData] = useState({
    Trainer_Name: '',
    Email: '',
    Phone: '',
    Experience: '',
    CoursesList: [],
    Permissions: []
  });
  const [courses, setCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchTrainerData = async () => {
      try {
        const Token = window.localStorage.getItem('Token');
        const response = await fetch('https://rz4gggsw-4522.inc1.devtunnels.ms/v1/admin/get-trainer/' + trainerData.Phone, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch trainer data');
        }

        const data = await response.json();
        setTrainerData(data);
      } catch (error) {
        setErrorMessage('Error fetching trainer data: ' + error.message);
      }
    };

    fetchTrainerData();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const Token = window.localStorage.getItem('Token');
      const response = await fetch(`https://rz4gggsw-4522.inc1.devtunnels.ms/v1/admin/update-trainer/${trainerData.Phone}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`
        },
        body: JSON.stringify(trainerData)
      });

      if (!response.ok) {
        throw new Error('Failed to update trainer');
      }

      // Success message or redirect to a different page
    } catch (error) {
      setErrorMessage('Error updating trainer: ' + error.message);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainerData({ ...trainerData, [name]: value });
  };

  // Handle checkbox changes for permissions
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const value = e.target.value;

    if (checked) {
      setTrainerData(prevData => ({
        ...prevData,
        Permissions: [...prevData.Permissions, value]
      }));
    } else {
      setTrainerData(prevData => ({
        ...prevData,
        Permissions: prevData.Permissions.filter(permission => permission !== value)
      }));
    }
  };

  return (
    <div>
      <h2>Update Trainer</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Trainer_Name">Trainer Name:</label>
          <input type="text" id="Trainer_Name" name="Trainer_Name" value={trainerData.Trainer_Name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input type="email" id="Email" name="Email" value={trainerData.Email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Phone">Phone:</label>
          <input type="tel" id="Phone" name="Phone" value={trainerData.Phone} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Experience">Experience:</label>
          <input type="text" id="Experience" name="Experience" value={trainerData.Experience} onChange={handleChange} />
        </div>
        <div>
          <label>Courses List:</label><br />
          {/* Render checkboxes for courses */}
          {courses.map(course => (
            <div key={course.id}>
              <input type="checkbox" id={course.id} name="CoursesList" value={course.id} onChange={handleCheckboxChange} />
              <label htmlFor={course.id}>{course.name}</label>
            </div>
          ))}
        </div>
        <div>
          <label>Permissions:</label><br />
          <input type="checkbox" id="Read" name="Permissions" value="Read" onChange={handleCheckboxChange} checked={trainerData.Permissions.includes('Read')} />
          <label htmlFor="Read">Read</label>
          <input type="checkbox" id="Write" name="Permissions" value="Write" onChange={handleCheckboxChange} checked={trainerData.Permissions.includes('Write')} />
          <label htmlFor="Write">Write</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpdateTrainerForm;
