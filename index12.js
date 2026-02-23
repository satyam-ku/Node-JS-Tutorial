//router...

import e, { response } from "express"
import express from "express"
import { Route } from "lucide-react"
const app = express()
app.listen(8080,() => {console.log("Server Started.....")})

const userRouter = express.Router()
const productRouter = express.Router()

userRouter.get("/",(request,response) => {
    response.send("This is get Request..of users")
})

userRouter.post("/",(request,response) => {
    response.send("This is post Request..od users")
})

productRouter.get("/",(request,response) => {
    response.send("This is get Request..of products")
})

productRouter.post("/",(request,response) => {
    response.send("This is post Request..of products")
})
app.use("/api/users",userRouter)
app.use("/api/products",productRouter)