import express, { Application } from "express"
import { createUser, getAUser, getAllUsers } from "./user.controller"

const userRouter: Application = express()

userRouter.post('/', createUser)
userRouter.get('/:userId', getAUser)
userRouter.get('/', getAllUsers)

export default userRouter