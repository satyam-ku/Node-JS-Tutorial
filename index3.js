import express from 'express'
const app = express()
app.listen(8080,()=>{
    console.log("Server started...");
})

app.get("/",(request,response) => {
    console.log(request.url)
    response.send("Response from server for /.")
})

app.get("/home",(request,response) => {
    console.log(request.url)
    response.send("Response from server for /home .")
})

app.get("/home/page1",(request,response) => {
    console.log(request.url)
    console.log(request.method)
     console.log(request.body)
      console.log(request.header)
       console.log(request.headers.authorization)
    response.send("Response from server for /home/page1.")
})
