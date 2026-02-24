
import mongoose from "mongoose";
import express from "express";
const app = express();
app.listen(8080,() => {console.log("Server Started....")});

const dbConnect = async () => {
  await mongoose.connect("mongodb://user1:user1@localhost:27017/lpu26");
};

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String },
});

const userModel = await mongoose.model("users", userSchema);
await dbConnect();

app.get("/", async (req, res) => {
  const result = await userModel.find();
  res.json(result);
});
