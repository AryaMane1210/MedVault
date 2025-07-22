import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authROutes from './routes/authRoute.js';
import Public from './routes/public.js';
import Details from './routes/details.js';
import QRTest from "./routes/public.js";

dotenv.config();
const dbURI= process.env.MONGODB_URI;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authROutes);
app.use("/public", Public);
app.use("/details", Details);

const PORT = process.env.PORT || 5000;
mongoose. connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology : true,
})
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`✅ Server running at http://localhost:${PORT}`);
    });
})
.catch((err) =>{
     console.error("❌ DB connection failed:", err.message);
})