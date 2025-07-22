import Details from "../models/details.js";

export const downloadQR = async (req, res) => {
  try {
    const existing = await Details.findOne({ user: req.user.id });

    if (!existing || !existing.qrCode) {
      return res.status(404).json({ message: "QR Code not found" });
    }

    const base64Data = existing.qrCode.replace(/^data:image\/png;base64,/, "");
    const imgBuffer = Buffer.from(base64Data, 'base64');

    res.set({
      'Content-Type': 'image/png',
      'Content-Disposition': 'attachment; filename="health-qr.png"'
    });

    res.send(imgBuffer);
  } catch (err) {
    res.status(500).json({ error: "Could not download QR", details: err.message });
  }
};
