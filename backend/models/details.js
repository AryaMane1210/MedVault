import mongoose from "mongoose";

const detailScehma= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type:String,
        required :true
    },
    blood_group:{
        type:String,
        required :true
    },
    condition:{
        type: [String],
        default: [],
    },
    medication:{
        type:[String],
        default :[],
    },
    allergies:{
        type:[String],
        default :[],
    },
    emg_name:{
        type:String,
        required:true,
    },
    emg_phone:{
        type:String,
        required: true,
    },
    qrCode:{
        type: String,
    },
    note:{
        type: String,
    },
    
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Auth",
        required: true
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'lastUpdated' } },
);

export default mongoose.model("UserDetails", detailScehma);