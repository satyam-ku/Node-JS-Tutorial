import express, { request, response } from "express";
import { use } from "react";
const app = express();
app.listen(8081, () => {
    console.log("Server Started....")
})

app.use(express.json()) // -> milddleware, it converts the json data into js object.
const users = [
    {id:1,name: "avi",
    email: "avi@mail.com",
    role: "Student"},

    {id:2,name: "satyam",
    email: "satyam@mail.com",
    role: "admin" },

    {id:3,name: "vivaan",
    email: "vivaan@mail.com",
    role: "Student" }
]


app.get("/",(request,response) => {  
    response.json(users);
})

app.post("/",(request,response) => {
    const user = request.body;
    users.push(user)
   response.json(users);
})

app.get("/:id",(request,response) => {
    const user = users.find((user) => user.id === Number(request.params.id));
    if(user){
        response.json(user);
    }
})  

app.delete("/:id",(request,response) => {
   users = users.filter((users)=>{users.id !== Number(request.params.id)});
   response.json(users);
})