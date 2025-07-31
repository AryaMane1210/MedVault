import Details from "../models/details.js";
import Joi from 'joi';
import QRCode from 'qrcode';

export const updateDetails = async (req,res)=>{
//    const {name, age, 
//             gender, condition, blood_group,
//             medication, allergies, 
//             emg_name, emg_phone,note
//         } = req.body;
     const existing = await Details.findOne({ user: req.user.id });

        if (!existing) {
            return res.status(404).json({ message: "Details not found for user" });
        }

       
        const updatedData = {
             name: req.body.name ?? existing.name,
                age: req.body.age ?? existing.age,
                gender: req.body.gender ?? existing.gender,
                blood_group: req.body.blood_group ?? existing.blood_group,
                condition: req.body.condition ?? existing.condition,
                medication: req.body.medication ?? existing.medication,
                allergies: req.body.allergies ?? existing.allergies,
                emg_name: req.body.emg_name ?? existing.emg_name,
                emg_phone: req.body.emg_phone ?? existing.emg_phone,
                note: req.body.note ?? existing.note,
        };

    try{
         const {
            name,
            blood_group,
            allergies,
            condition,
            emg_name,
            emg_phone,
            note,
        } = updatedData;

         const emergencyInfo = `
            🆘 Emergency Medical Info

            👤 Name: ${name}
            🧬 Blood Group: ${blood_group}
            ⚠️ Allergies: ${allergies || "None"}
            💊 Conditions: ${condition || "None"}
            📞 Emergency Contact: ${emg_name} – ${emg_phone}
            📝 Note: ${note || "None"}
                `;
        const qrCode = await QRCode.toDataURL(emergencyInfo);

        const updated = await Details.findOneAndUpdate(
            {user: req.user.id},
            {   ...updatedData, qrCode,
                 lastUpdated: new Date()
            },
            {new:true}
        );

        if(!updated){
            return res.status(404).json({message: "Details not found for user"});
        }
       
        res.status(200).json({message: "Details updated successfully !", data:updated});
    }catch(err){
        res.status(500).json({error: "update failed", details : err.message});
    }
}