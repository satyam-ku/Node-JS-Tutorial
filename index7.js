import express, { request, response } from "express";
const app = express();
app.listen(8080, () => {
    console.log("Server Started....")
})

app.get("/", (request,response) => {
    const users = {
    name: "avi",
    email: "avi@mail.com",
    role: "Student"
}
response.json(users);
})