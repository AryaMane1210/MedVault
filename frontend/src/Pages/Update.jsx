import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    blood_group: "",
    condition: [],
    medication: [],
    allergies: [],
    emg_name: "",
    emg_phone: "",
    note: "",
  });

  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/details/get", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
         
         console.log("Fetched details:", res.data);

        setFormData(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching details:", err);
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, []);

  const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value
        }));
    };
   


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put("http://localhost:5000/details/update", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Details updated successfully!");
      navigate("/viewqr");
    } catch (err) {
      console.error("Error updating details:", err);
    }
  };

    if (loading) return <div className="p-4 text-center">Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#d9e4f5] px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-blue-700 text-center">
          Update Medical Info 🩺
        </h2>

        {/* {[
          { label: "Full Name", name: "name" },
          { label: "Age", name: "age", type: "number" },
          { label: "Gender", name: "gender" },
          { label: "Blood Group", name: "blood_group" },
          { label: "Health Conditions (comma-separated)", name: "condition" },
          { label: "Medications (comma-separated)", name: "medication" },
          { label: "Allergies (comma-separated)", name: "allergies" },
          { label: "Emergency Contact Name", name: "emg_name" },
          { label: "Emergency Contact Phone", name: "emg_phone" },
          { label: "Note", name: "note" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
            <input
              type={type}
              name={name}
              value={
                Array.isArray(formData[name])
                  ? formData[name].join(", ")
                  : formData[name]
              }
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        ))} */}

          <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="w-full px-4 py-2 rounded-md border border-gray-300"
      required
    />
  </div>

  
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
    <input
      type="number"
      name="age"
      min={0}
      max={120}
      value={formData.age}
      onChange={handleChange}
      className="w-full px-4 py-2 rounded-md border border-gray-300"
      required
    />
  </div>

  
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
    <select
      name="gender"
      value={formData.gender}
      onChange={handleChange}
      required
      className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white"
    >
      
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  </div>

  
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group</label>
    <select
      name="blood_group"
      value={formData.blood_group}
      onChange={handleChange}
      required
      className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white"
    >
      
      {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
        <option key={bg} value={bg}>{bg}</option>
      ))}
    </select>
  </div>

 
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Health Conditions (comma-separated)</label>
    <input
      type="text"
      name="condition"
      value={formData.condition.join(", ")}
      onChange={handleChange}
      className="w-full px-4 py-2 rounded-md border border-gray-300"
    />
  </div>

 
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Medications (comma-separated)</label>
    <input
      type="text"
      name="medication"
      value={formData.medication.join(", ")}
      onChange={handleChange}
      className="w-full px-4 py-2 rounded-md border border-gray-300"
    />
  </div>

 
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Allergies (comma-separated)</label>
    <input
      type="text"
      name="allergies"
      value={formData.allergies.join(", ")}
      onChange={handleChange}
      className="w-full px-4 py-2 rounded-md border border-gray-300"
    />
  </div>

  
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Name</label>
    <input
      type="text"
      name="emg_name"
      value={formData.emg_name}
      onChange={handleChange}
      className="w-full px-4 py-2 rounded-md border border-gray-300"
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Phone</label>
    <input
      type="tel"
      name="emg_phone"
      value={formData.emg_phone}
      onChange={handleChange}
      pattern="\d{10}"
      maxLength={10}
      minLength={10}
      title="Please enter exactly 10 digits"
      className="w-full px-4 py-2 rounded-md border border-gray-300"
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Note</label>
    <input
      type="text"
      name="note"
      value={formData.note}
      onChange={handleChange}
      className="w-full px-4 py-2 rounded-md border border-gray-300"
    />
  </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition duration-300"
        >
          Save & Generate QR 
        </button>
      </form>
    </div>
  );
};

export default UpdateDetails;
