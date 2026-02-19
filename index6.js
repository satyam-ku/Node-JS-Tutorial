import express, { request, response } from "express";
const app = express();
app.listen(8080, () => {
    console.log("Server Started....")
})

// app.get("/:name", (request,response) => {
//     response.send("Hello "+request.params.name);
// })

app.get("/", (request,response) => {
    response.send("Hello "+request.query.name);
})