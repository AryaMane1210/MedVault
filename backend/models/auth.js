import mongoose from "mongoose";

const authSchema= new mongoose.Schema({
    email:{
        type:String,
        required :true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minlength:5
    }
});

export default mongoose.model("AuthDetails", authSchema);