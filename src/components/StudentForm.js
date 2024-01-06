import React, { useState} from 'react';


export default function StudentForm (props){
    const [showAlert, setShowAlert] = useState(false);
    const Card = () =>{
        return (
            <div>
                {showAlert && (
                    <div className="alert alert-warning" role="alert">
                    All fields are required...
                    </div>
                )}
          </div>
        );
      }
    
    const [formData, setFormData] = useState({
        name: '',
        class: '',
        section: '',
        fee: '',
        joiningDate: ''
      });
    
      const [students, setStudents] = useState([]);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSave = () => {
        if(formData.name.trim() === '' | formData.class.trim() === '' || formData.section.trim() === '' || formData.fee.trim() === '' || formData.joiningDate.trim() === '')
        {
            setShowAlert(true);
        }
        else{
            setShowAlert(false);
            const newStudent = { ...formData };
            setStudents([...students, newStudent]);
            setFormData({
              name: '',
              class: '',
              section: '',
              fee: '',
              joiningDate: ''
            });
        }
        
      };

    return(
        <>
        <Card/>
<div className='container'>
      <h2>Student Information</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Class:</label>
        <input
          type="text"
          name="class"
          value={formData.class}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Section:</label>
        <input
          type="text"
          name="section"
          value={formData.section}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Fee:</label>
        <input
          type="number"
          name="fee"
          value={formData.fee}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Joining Date:</label>
        <input
          type="date"
          name="joiningDate"
          value={formData.joiningDate}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSave}>Save</button>

      {/* Displaying entered data */}
      <div>
        <h2>Students Information</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {`Name: ${student.name}, Class: ${student.class}, Section: ${student.section}, Fee: ${student.fee}, Joining Date: ${student.joiningDate}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
    );
}