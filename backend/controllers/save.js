import Details from '../models/details.js';
import Joi from 'joi';
import generateQR from '../utils/QRCode.js';
import QRCode from 'qrcode';

export const saveDetails =async(req,res) =>{
    try{
    const {name, age, 
            gender, condition, blood_group,
            medication, allergies, 
            emg_name, emg_phone, note} = req.body;

            if (!name || !age || !gender || !blood_group || !emg_name || !emg_phone) {
                return res.status(400).json({ message: 'Please fill all required fields' });
                }
     
        const exists= await Details.findOne(
            {user : req.user.id,});
            if(exists){
                return res.status(400).json({message: "Details already exist for this user"});
            } 
            const newDetails= new Details(
            {name, age, 
            gender, condition,blood_group, 
            medication, allergies, 
            emg_name, emg_phone, note, user: req.user.id});

            const saved = await newDetails.save();
            const emergencyInfo = `
            🆘 EMERGENCY MEDICAL DETAILS 🆘
            👤 Name: ${name}
            🧬 Blood Group: ${blood_group}
            ⚠️ Allergies: ${allergies || "None"}
            💊 Conditions: ${condition || "None"}
            📞 Emergency Contact: ${emg_name} – ${emg_phone}
            📝 Note:
                ${req.body.note || "No additional instructions provided."}
                `;
                
                
                 // 3. Generate QR code from text (offline data)
    const qrImg = await QRCode.toDataURL(emergencyInfo);
        // const qrCode= await generateQR(req.user.id);
        // newDetails.qrCode = qrCode;
        //  const saved = await newDetails.save();
        res.status(201).json({message: "✅ Details saved successfully", data: saved, qrImg });
    }catch(err){
        res.status(500).json({error: "failed", details: err.message});
    }
};



// user.qrCode= qrCode;
// await user.save();