import QRCode from "qrcode";

const generateQR = async(userId) =>{
    const url =`http://localhost:5000/public/${userId}`;
    try{
        const qrCodeDataURL = await QRCode.toDataURL(url);
        return qrCodeDataURL;
    }catch(err){
        throw new Error("QR code generation failed");
    }
};

export default generateQR;