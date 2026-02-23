
import express from "express"
const userRouter = express.Router()

userRouter.get("/",(request,response) => {
    response.send("This is get Request..of users")
})

userRouter.post("/",(request,response) => {
    response.send("This is post Request..od users")
})
export default userRouter;