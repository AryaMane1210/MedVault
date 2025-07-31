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

     const newDetails= new Details(
            {name, age, 
            gender, condition,blood_group, 
            medication, allergies, 
            emg_name, emg_phone, note, user: req.user.id, qrCode: qrImg });

            const saved = await newDetails.save();

    //  newDetails.qrCode = qrImg;
    // //  // ✅ Save QR code string to DB
    
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

// import Details from '../models/details.js';
// import Joi from 'joi';
// import QRCode from 'qrcode';

// export const saveDetails = async (req, res) => {
//   try {
//     // 1. Joi Schema Validation
//     const schema = Joi.object({
//       name: Joi.string().required(),
//       age: Joi.number().min(0).max(100).required(),
//       gender: Joi.string().valid('male', 'female', 'other').required(),
//       condition: Joi.string().allow('', null),
//       blood_group: Joi.string().valid(
//         'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
//       ).required(),
//       medication: Joi.string().allow('', null),
//       allergies: Joi.string().allow('', null),
//       emg_name: Joi.string().required(),
//       emg_phone: Joi.string().pattern(/^[6-9]\d{9}$/).required()
//         .messages({ 'string.pattern.base': 'Enter a valid 10-digit Indian phone number.' }),
//       note: Joi.string().allow('', null),
//     });

//     const { error, value } = schema.validate(req.body);
//     if (error) {
//       return res.status(400).json({ message: error.details[0].message });
//     }

//     const {
//       name, age, gender, condition,
//       blood_group, medication, allergies,
//       emg_name, emg_phone, note
//     } = value;

//     // 2. Check if details already exist
//     const exists = await Details.findOne({ user: req.user.id });
//     if (exists) {
//       return res.status(400).json({ message: "Details already exist for this user" });
//     }

//     // 3. Emergency Info Template
//     const emergencyInfo = `
// 🆘 EMERGENCY MEDICAL DETAILS 🆘
// 👤 Name: ${name}
// 🧬 Blood Group: ${blood_group}
// ⚠️ Allergies: ${allergies || "None"}
// 💊 Conditions: ${condition || "None"}
// 📞 Emergency Contact: ${emg_name} – ${emg_phone}
// 📝 Note:
// ${note || "No additional instructions provided."}
//     `;

//     // 4. Generate QR Code from the text
//     const qrImg = await QRCode.toDataURL(emergencyInfo);

//     // 5. Save to DB
//     const newDetails = new Details({
//       name, age, gender, condition, blood_group,
//       medication, allergies, emg_name, emg_phone, note,
//       user: req.user.id,
//       qrCode: qrImg
//     });

//     const saved = await newDetails.save();
//     res.status(201).json({ message: "✅ Details saved successfully", data: saved, qrImg });

//   } catch (err) {
//     res.status(500).json({ error: "Failed to save", details: err.message });
//   }
// };
