//router...

import e, { response } from "express"
import express from "express"
import { Route } from "lucide-react"
const app = express()
app.listen(8080,() => {console.log("Server Started.....")})

const Router = express.Router()
Router.get("/",(request,response) => {
    response.send("This is get Request...")
})

Router.post("/",(request,response) => {
    response.send("This is post Request..")
})

app.use("/api/users",Router)