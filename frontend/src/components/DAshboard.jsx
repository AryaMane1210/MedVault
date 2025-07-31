


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Settings from "../Pages/Settings.jsx";
import axios from "axios";
import { Calendar, CheckCircle, Folder, Pencil,Download, Eye, Plus} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/details/get", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch user data:", err);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  const hasMedicalInfo = Boolean(
    userData?.name &&
    userData.age &&
    userData.gender &&
    userData.blood_group &&
    userData.emg_name &&
    userData.emg_phone
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dff1ff] to-[#e7ecff] p-8 flex items-center justify-center font-sans">
      <div className="w-full max-w-6xl bg-white/70 rounded-3xl shadow-xl backdrop-blur-lg border border-white/30 px-10 py-12 flex flex-col md:flex-row gap-10">
        
        
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3 flex items-center gap-2">
            
             Welcome back, <span className="text-blue-900">{userData?.name || "there"}</span>!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your health vault is{" "}
            <span className="text-green-600 font-semibold">synced & secure</span>.
          </p>

          <div className="bg-white/40 border border-white/50 rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Vault Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/60 rounded-xl p-4 shadow text-center">
                <p className="text-gray-600 text-sm">
                   <Calendar className="w-4 h-4 text-blue-500" /> Last Update</p>
                <p className="font-bold text-gray-800"> {userData?.updatedAt ? new Date(userData.updatedAt).toLocaleString()  : "Not available"}</p>
              </div>
              <div className="bg-white/60 rounded-xl p-4 shadow text-center">
                <p className="text-gray-600 text-sm">
                  <Folder className="w-4 h-4 text-yellow-500" /> Total Records</p>
                <p className="font-bold text-gray-800">1</p>
              </div>
            </div>
            <div className="bg-white/60 rounded-xl p-4 shadow text-center">
              <p className="text-gray-600 text-sm">
                 <CheckCircle className="w-4 h-4 text-green-500" />Status</p>
              <p className="font-bold text-green-600">Synced</p>
            </div>
          </div>
        </div>

        


        <div className="flex flex-col justify-start gap-4 w-full md:w-[220px]">
          {hasMedicalInfo ? (
            <>
              <button
                onClick={() => navigate("/update-details")}
                className="bg-white/60 hover:bg-white/80 text-blue-700 border border-blue-200 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 justify-center shadow"
              >
                 <Pencil className="w-4 h-4 text-gray-900" /> Update My Info
              </button>
              {userData.qrCode && (
                <>
                  <a
                    href={userData.qrCode}
                    download="MyQR.png"
                    className="bg-white/60 hover:bg-white/80 text-blue-700 border border-blue-200 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 justify-center shadow"
                  >
                     <Download className="w-4 h-4 text-gray-900" /> Download QR Code
                  </a>
                  <button
                    onClick={() => navigate("/viewqr")}
                    className="bg-white/60 hover:bg-white/80 text-blue-700 border border-blue-200 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 justify-center shadow"
                  >
                     <Eye className="w-4 h-4 text-gray-900" />  View QR
                  </button>
                  <button className="bg-white/60 hover:bg-white/80 text-blue-700 border border-blue-200 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 justify-center shadow">
                    <Settings />
                  </button>
                </>
              )}
            </>
          ) : (
            <button
              onClick={() => navigate("/add-details")}
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3  rounded-xl font-semibold shadow  flex items-center gap-2"
            >
              <Plus className="w-4 h-4 text-white" />Add Medical Info
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
