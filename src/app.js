import express from "express";
import router from "./router/student.js";
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
app.listen(3322, () => {
  console.log("listening on 3322");
});
