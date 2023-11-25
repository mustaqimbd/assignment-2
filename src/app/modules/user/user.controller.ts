import { NextFunction, Request, Response } from "express"
import { userService } from "./user.service"
import userDataValidation from "./user.validation"

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { value, error } = userDataValidation.validate(req.body)
        if (error) {
            return res.status(400).json({ error: error.details.map((err) => err.message) });
        }
        const result = await userService.createUserInDB(value)
        res.status(200).json({
            success: true,
            message: "User created successfully!",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const getAUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userService.getAUserFromDB(req.params.userId)
        res.status(200).json({
            success: true,
            message: "User created successfully!",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userService.getAllUsersFromDB()
        res.status(200).json({
            success: true,
            message: "User created successfully!",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export { createUser, getAUser, getAllUsers }