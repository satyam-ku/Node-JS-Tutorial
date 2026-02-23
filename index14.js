import express from "express"
import jwt from "jsonwebtoken"
const app = express()
const SECRET = "lpu";
app.listen(8080, () => {console.log("Server Started...")})

const user = {
    name: "viv",
    email: "viv@gmail.com",
    role: "Student"
}

const token = jwt.sign(user,SECRET, {expiresIn: "1hr"})
