import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ChangePassword from "../Pages/Update_password.jsx";
import {Key, Trash } from "lucide-react";

const Settings = () => {

  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();

  const handleDeleteAcc = async () =>{
    try{
      const token = localStorage.getItem("token");
      await axios.delete("http://localhost:5000/auth/delete",{
        headers: {Authorization : `Bearer ${token}`},
      });
      localStorage.removeItem("token");
      alert("Account deleted successfully");
      navigate("/");
    }catch(error){
      console.error("❌ Failed to delete account:", error);
       alert("Something went wrong while deleting account.");
    }
  }
  
  return (
    <div className="relative">
      <button
        className="bg-white/60 px-4 py-2 rounded "
        onClick={() => setShowDropdown(!showDropdown)}
      >
        ⚙️ Settings
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 bg-white/60 shadow-md rounded p-2 z-10">
          <button
            onClick={() => {
              setShowModal(true);
              setShowDropdown(false);
            }}
            className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
          >
            <Key className="w-5 h-5 text-yellow-600" /> Change Password
          </button>
          <button
            onClick={() =>{
              setShowDeleteModal(true);
              setShowDropdown(false);
            }}
            className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left text-red-600"
          >
            <Trash className="w-5 h-5 text-red-600" /> Delete Account
          </button>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-100 z-20">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-lg"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>
            <ChangePassword onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}
      {showDeleteModal && (
        <div className="fixed  flex items-center justify-center bg-white bg-opacity-80 z-80">
          <div className="bg-blue-100 p-6 rounded-lg w-full max-w-sm text-center shadow-lg">
            <p className="text-lg font-semibold mb-4 text-gray-600">Are you sure you want to delete your account?</p>
            <div className="flex justify-around">
              <button
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={handleDeleteAcc}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
