import express from "express"
import multer from "multer"
const path = require("path");

const app = express();

// Set up Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory where files will be saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename
  },
});

// Configure Multer middleware
const upload = multer({ storage: storage });

// Route to handle file upload
app.post("/api/upload", upload.single("blog_Image"), (req, res) => {
  try {
    const imageUrl = `/uploads/${req.file.filename}`;
    res.status(200).json({ imageUrl });
  } catch (error) {
    res.status(500).json({ error: "File upload failed" });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
