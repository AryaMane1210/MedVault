import React, { useState } from "react";

import axios from "axios";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("❌ New passwords do not match.");
      return;
    }

    try {
      const token = localStorage.getItem("token"); 

      const res = await axios.put(
        "http://localhost:5000/auth/change-password",
        {
          oldPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(res.data.message);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Change Password 🔐</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="Old Password"
          className="w-full p-2 border rounded"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-2 border rounded"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className="w-full p-2 border rounded"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Change Password
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm">{message}</p>}
    </div>
  );
};

export default ChangePassword;
