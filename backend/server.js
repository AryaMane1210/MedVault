import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
import cors from "cors";


import authROutes from './routes/authRoute.js';
import Public from './routes/public.js';
import Details from './routes/details.js';
import QRTest from "./routes/public.js";

const dbURI= process.env.MONGODB_URI;
const app = express();


app.use(cors({origin: "http://localhost:5173", credentials: true}));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use("/auth", authROutes);
app.use("/public", Public);
app.use("/details", Details);

app.use((req, res, next) => {
  console.log(`[ROUTE] ${req.method} ${req.url}`);
  next();
});


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