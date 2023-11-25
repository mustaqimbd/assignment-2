import express, { Application } from "express"
import { createUser } from "./user.controller"

const userRouter: Application = express()

userRouter.post('/', createUser)

export default userRouter