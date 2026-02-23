import express from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
const app = express();

app.use(express.json());

app.listen(8080, () => {console.log("Server Started....")});

const users = [];

app.post("/signup", async (req, res) => {
  const body = req.body;
  const hashPassword = await bcrypt.hash(body.password, 10);
  body.password = hashPassword;
  users.push(body);
  res.json(users);
});


function auth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  const user = users.find((u) => u.token === token);

  if (!user) {
    return res.status(401).json({ message: "Invalid Token" });
  }

  req.user = user;
  next(); 
}

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const found = users.find((user) => user.email === email);

  if (!found) {
    return res.status(401).json({ message: "User not found" });
  }

  const chkPassword = await bcrypt.compare(password, found.password);

  if (!chkPassword) {
    return res.status(401).json({ message: "Invalid Password" });
  }

  
  const token = crypto.randomBytes(16).toString("hex");
  found.token = token; 

  res.status(200).json({ message: "success", token });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/", auth, (req, res) => {
  res.send(`Helloooooo worlddddd..... Welcome ${req.user.email}`);
});