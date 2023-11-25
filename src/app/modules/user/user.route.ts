import express, { Application } from "express"
import { createUser, getAUser, getAllUsers, updateUser } from "./user.controller"

const userRouter: Application = express()

userRouter.post('/', createUser)
userRouter.get('/:userId', getAUser)
userRouter.get('/', getAllUsers)
userRouter.put('/:userId', updateUser)

export default userRouter