import express from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import fs from "fs";

const router = express.Router();

router.post("/upload", upload.single("file"), async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded." });
    }

    const fileContent = await fs.readFile(req.file.path, "utf-8");


    const jsonArray = JSON.parse(fileContent);

    
    await fs.unlink(req.file.path);

 
    return res.status(200).json({
      success: true,
      message: "File uploaded and parsed successfully!",
      data: jsonArray,
    });

  } catch (error) {
    console.error("File processing error:", error);

    return res.status(500).json({ success: false, message: "Error processing file." });
  }
});

export default router;