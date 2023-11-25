import express, { Application } from "express"
import { addUserOrder, createUser, deleteUser, getAUser, getAllUsers, getUserAllOrders, getUserOrdersTotalPrice, updateUser } from "./user.controller"

const userRouter: Application = express()

userRouter.post('/', createUser)
userRouter.get('/:userId', getAUser)
userRouter.get('/', getAllUsers)
userRouter.put('/:userId', updateUser)
userRouter.delete('/:userId', deleteUser)
userRouter.put('/:userId/orders', addUserOrder)
userRouter.get('/:userId/orders', getUserAllOrders)
userRouter.get('/:userId/orders/total-price', getUserOrdersTotalPrice)

export default userRouter