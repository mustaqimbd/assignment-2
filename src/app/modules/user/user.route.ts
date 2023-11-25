import express, { Application } from "express"
import { createUser, deleteUser, getAUser, getAllUsers, updateUser } from "./user.controller"

const userRouter: Application = express()

userRouter.post('/', createUser)
userRouter.get('/:userId', getAUser)
userRouter.get('/', getAllUsers)
userRouter.put('/:userId', updateUser)
userRouter.delete('/:userId', deleteUser)

export default userRouter