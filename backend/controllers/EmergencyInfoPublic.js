import Details from "../models/details.js";


export const EmergencyInfo = async(req,res) =>{
    try{
        console.log("🔍 User ID:", req.params.id);
        const info = await Details.findOne({user : req.params.id});
        if(!info){
            return res.status(404).json({message: "No emergency info found"});
        }

        res.send(`
            <html>
            <head>
            <title> Emergency medical info </title>
            <style>
            body {
            font-family: sans-serif;
            padding: 2rem;
            background: #fffbe6;
            color: #333;
            }
            h1 {color : #b30000; }
            </style>
            </head>
            <body>
            <h1> 🚨 Emergency Medical Details </h1>
            <p><strong>👤 Name: </strong> ${info.name} </p>
            <p><strong> 🧬 Blood Group:</strong> ${info.blood_group}</p>
            <p><strong>💊 Conditions:</strong> ${info.condition?.join(", ") || "None"}</p>
            <p><strong>⚠️ Allergies:</strong> ${info.allergies || "None"}</p>
            <p><strong>📞 Emergency Contact:</strong> ${info.emg_name} – ${info.emg_phone}</p>
            </body>
            </html>
            `);
    } catch(err){
        console.error("❌ Emergency Info Fetch Error:", err.message);
        res.status(500).send("Something went wrong");
    }
};