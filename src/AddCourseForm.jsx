import React, { useState } from 'react';

function AddCourseForm() {
  const [formData, setFormData] = useState({
    CourseName: '',
    Duration: '',
    Sdate: '',
    Edate: '',
    Cost: '',
    Discount: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const Token = window.localStorage.getItem('Token');
      const response = await fetch('https://rz4gggsw-4522.inc1.devtunnels.ms/v1/admin/add-course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}` // Include the token in the request headers
        },
        body: JSON.stringify(formData)
        
      });
      const data = await response.json();
      console.log('Data added:', data);
      window.location.reload();
      // Reset form data or show success message
    } catch (error) {
      console.error('Error adding data:', error);
      // Handle error
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="container py-5">

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form bg-secondary rounded p-5">
                <div id="success" />
                <div className="text-center">
                  <h2>Add Course</h2>
                </div>

                <form onSubmit={handleSubmit} className="container">
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
                    <input type="date" id="Sdate" name="Sdate" value={formData.Sdate} onChange={handleChange} className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Edate">End Date:</label>
                    <input type="date" id="Edate" name="Edate" value={formData.Edate} onChange={handleChange} className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Cost">Cost:</label>
                    <input type="text" id="Cost" name="Cost" value={formData.Cost} onChange={handleChange} className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Discount">Discount:</label>
                    <input type="text" id="Discount" name="Discount" value={formData.Discount} onChange={handleChange} className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCourseForm;
