import express from "express";
const app = express();
app.listen(8081, () => {
    console.log("Server Started....")
})

const logger = (request,response,next) => {
    request.message = "This is logger function";
    // console.log(request.url)
    next();
}

// app.use(logger)

app.get("/",logger,(request,response) => {
    // app.use(logger);
    console.log(request.message);
    response.json(request.url);
})

app.get("/home",(request,response) => {
    console.log(request.message);
    response.json(request.url);
})


