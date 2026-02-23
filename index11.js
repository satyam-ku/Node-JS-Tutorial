import express from "express"
const app = express()
app.listen(8080, () => {console.log("Server Started....")})
//middleware
// app.use(express.static("images")) //localhost:8080/nameOfImage
// app.use("/images",express.static("images")) //localhost:8080/images/nameOfImge

app.use("/public",express.static("public"))