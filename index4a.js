import express, { request, response } from "express";
const app = express();
app.listen(8080, () => {
    console.log("Server Started....")
})

app.get("/:num1/:num2", (request,response) => { 
    const num1 = Number(request.params.num1);
    const num2 = Number(request.params.num2);

    response.send((num1 + num2).toString());
})
