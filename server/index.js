import express from 'express';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express();

dotenv.config();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});