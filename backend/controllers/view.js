import Details from '../models/details.js';

export const getDetails = async (req, res) => {
  try {
    const userId = req.user.id;

    const details = await Details.findOne({ user: userId });

    if (!details) {
      return res.status(404).json({ message: "No medical details found for this user." });
    }

    res.status(200).json({
      message: "✅ Details fetched successfully",
      data: details
    });
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching details", error: error.message });
  }
};
