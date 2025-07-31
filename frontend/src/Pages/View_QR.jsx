import React, { useEffect, useState } from "react";
import axios from "axios";

const View_QR = () => {
  const [qrLink, setQrLink] = useState("");

  useEffect(() => {
    const fetchQRLink = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/details/get", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

           console.log("Full user data:", response.data); 

      const qrLink = response.data?.qrCode || response.data?.qrLink || response.data?.data?.qrCode;
      if (qrLink) {
        setQrLink(qrLink);
      } else {
        console.warn("No QR link found in response.");
      }
    } catch (err) {
      console.error("Error fetching QR link:", err);
    }
  };

    fetchQRLink();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-blue-100 min-h-screen overflow-hidden ">
      <h1 className="text-2xl font-bold mb-4">Your Medical QR Code</h1>
      {qrLink ? (
        <>        <img src={qrLink} alt="QR Code" className="w-64 h-64  rounded-lg shadow-md" />
      <a
              href={qrLink}
              download="Medvault-qr.png"
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Download QR Code
            </a>
        </>

      ) : (
        <p className="text-gray-500">Loading QR Code...</p>
      )}
    </div>
  );
};

export default View_QR;
