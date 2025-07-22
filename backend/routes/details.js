import express from "express";
import { saveDetails } from "../controllers/save.js";
import { protect } from "../middleware/auth.js";
import { updateDetails } from "../controllers/update.js";
import { downloadQR } from '../controllers/download.js';

const router= express.Router();
router.post("/save",protect, saveDetails);
router.put("/update",protect,  updateDetails);
// router.get("/ping", (req, res) => {
//   res.send("📡 Pong from /details!");
// });
router.get('/qr/download', protect, downloadQR);
export default router;
