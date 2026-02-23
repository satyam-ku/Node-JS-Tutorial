import express from "express"
import jwt from "jsonwebtoken"

const app = express();
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidml2IiwiZW1haWwiOiJ2aXZAZ21haWwuY29tIiwicm9sZSI6IlN0dWRlbnQiLCJpYXQiOjE3NzE4MzM4ODMsImV4cCI6MTc3MTgzNzQ4M30.xWgsR6sZSryDriFoc93m-aGJnHJLEgfCmC9RifwkRhw"

const SECRET = "lpu"

const user = jwt.verify(token,SECRET)
console.log(user)