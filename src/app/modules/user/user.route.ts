import express, { Application } from "express"
import { createUser, getAllUsers } from "./user.controller"

const userRouter: Application = express()

userRouter.post('/', createUser)
userRouter.get('/', getAllUsers)

export default userRouter