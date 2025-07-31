import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UserDetailsForm = ({ userId }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    blood_group: '',
    condition: '',
    medication: '',
    allergies: '',
    emg_name: '',
    emg_phone: '',
    note: ''
  });
    const navigate= useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const dataToSend = {
      ...formData,
      condition: formData.condition.split(',').map(c => c.trim()),
      medication: formData.medication.split(',').map(m => m.trim()),
      allergies: formData.allergies.split(',').map(a => a.trim()),
      // user: userId
    };

    try {
      const res = await axios.post('http://localhost:5000/details/save', dataToSend, {
        headers: {
        Authorization: `Bearer ${token}` 
      }
      });
      console.log('Submitted:', res.data);
      alert("Details saved successfully!");
      navigate("/viewqr");
    } catch (error) {
      console.error('Error saving details:', error.response?.data || error.message);
      alert("Something went wrong.");
    }
  };

  return (
   <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">Medical Details Form</h2>
        <p className="text-center text-gray-500 mb-8">Fill in your emergency and health information carefully.</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 ">
          <input name="name" placeholder="Full Name" onChange={handleChange} required className="input border-1 p-3 rounded" />
          <input name="age" placeholder="Age" type="number" onChange={handleChange} required  value={formData.age} min="0" max="120" className="input border-1 p-3 rounded" />
          {/* <input name="gender" placeholder="Gender" onChange={handleChange} required className="input border-1 p-3 rounded" /> */}
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="input border-1 p-3 rounded bg-white"
          >
            <option value="" disabled selected hidden>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {/* <input name="blood_group" placeholder="Blood Group" onChange={handleChange} required className="input border-1 p-3 rounded" /> */}
          <select
            name="blood_group"
            value={formData.blood_group}
            onChange={handleChange}
            required
            className="input border-1 p-3 rounded bg-white"
          >
            <option value="" disabled selected hidden> Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          <input name="condition" placeholder="Medical Conditions (comma separated)" onChange={handleChange} className="input border-1 p-3 rounded" />
          <input name="medication" placeholder="Medications (comma separated)" onChange={handleChange} className="input border-1 p-3 rounded" />
          <input name="allergies" placeholder="Allergies (comma separated)" onChange={handleChange} required className="input border-1 p-3 rounded" />
          <input name="note" placeholder="Additional Notes" onChange={handleChange} className="input border-1 p-3 rounded" />
          <input name="emg_name" placeholder="Emergency Contact Name" onChange={handleChange} required className="input border-1 p-3 rounded" />
          <input name="emg_phone" placeholder="Emergency Contact Phone- 10 digits" type="tel" pattern="\d{10}" minLength={9} maxLength={10} onChange={handleChange} required className="input border-1 p-3 rounded" />

          <div className="col-span-full flex justify-center">
            <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-full shadow hover:bg-blue-800 transition">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsForm;
