import dotenv from "dotenv";
dotenv.config();
// when ever you change env you restart the server
import express from "express";
import router from "./router/index.js";
import connectDB from "./config/db.js";
const app = express();
// connecting db
connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  return res.json({ message: "Hello world!" });
});

app.use(router);
const port =process.env.PORT
app.listen(port, () => {
  console.log("Backend Listening...! ");
});
