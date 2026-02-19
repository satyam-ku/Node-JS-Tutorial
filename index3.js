import express from 'express'
const app = express()
app.listen(8080,()=>{
    console.log("Server started...");
})

app.get("/home",(request,response) => {
    console.log(request.url)
    response.send("Response from server for /home .")
})
