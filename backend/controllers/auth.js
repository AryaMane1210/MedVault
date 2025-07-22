import express from "express";
import Joi from "joi";
import bcrypt from "bcrypt";
import Auth from "../models/auth.js";
import jwt from "jsonwebtoken";


const signupSchema = Joi.object({
    email :Joi.string().email().required().lowercase(),
    password: Joi.string().required()
}); 
const loginSchema =Joi.object({
    email :Joi.string().email().required().lowercase(),
    password: Joi.string().required()
})

export const signup =async(req,res) =>{
    const {error} = signupSchema.validate(req.body);
    if(error){
        res.status(400).json({message:error.details[0].message});
    }
    const {email,password} = req.body;
    try{
        const hashedPassword= await bcrypt.hash(password, 10);
        const newSign = new Auth({
            email,
            password: hashedPassword
        });
        const SavedUser= await newSign.save();
        res.status(200).json({message: "User registered successfully", user:SavedUser});
    }catch(err){
        res.status(200).json({message: "Signup failed", error:err.message});
    }
};

export const login= async(req,res)=>{
    const {error} = loginSchema.validate(req.body);
    if(error){
        return res.status(400).json({message:error.details[0].message});
    }
    const {email,password}= req.body;
    try{
        const user= await Auth.findOne({email});
        if(!user){
            return res.status(400).json({message: "user not found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(200).json({message:"Inavalid Password"});
        }
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.status(200).json({
            mesaage: "Login successful",
            token,
            user:{id:user._id, email: user.email}
        });

    }catch(err){
        res.status(500).json({massage: "Login failed", error: err.message})
    }
};