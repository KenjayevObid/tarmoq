import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/users.js";
dotenv.config();
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
// const CONNECTION_URL ='mongodb+srv://okenjaev2192:obid123456789@cluster0.mm5iggm.mongodb.net/test'
// const CONNECTION_URL = 'mongodb://127.0.0.1:27017/test';

// mongoose.set('useFindAndModify', false);

app.get("/", (req, res) => {
  res.send("https://tarmoq.onrender.com sayt ishga tushdi");
});
app.use("/posts", postRoutes);

app.get("*", (req, res) => {
  res.send("Bunaqa manzil topilmadi");
});



