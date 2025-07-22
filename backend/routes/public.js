import express from "express";
import generateQR from "../utils/QRCode.js";
import { EmergencyInfo } from "../controllers/EmergencyInfoPublic.js";

const router=express.Router();

router.get("/:id", EmergencyInfo); 

router.get('/test-qr/:id', async(req,res) =>{
    try{
        const qr= await generateQR(req.params.id);
        res.status(200).send(`<img src = "${qr}" alt= "QR Code" />`);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});
export default router;