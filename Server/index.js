import express, { response } from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  response.json("monostack server");
});

// retrieve info from form
//here we add to database
//her we would respond your upload has been sucsesful
app.listen(8080, (req, res) => {
  console.log("server is running on 8080");
});
