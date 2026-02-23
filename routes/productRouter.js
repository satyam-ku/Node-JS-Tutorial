
import express from "express"
const productRouter = express.Router()

productRouter.get("/",(request,response) => {
    response.send("This is get Request..of products")
})

productRouter.post("/",(request,response) => {
    response.send("This is post Request..of products")
})
export default productRouter;