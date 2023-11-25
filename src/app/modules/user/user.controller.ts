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
        if (!result) {
            return res.json({
                "success": false,
                "message": "User not found",
                "error": {
                    "code": 404,
                    "description": "User not found!"
                }
            })
        }
        res.status(200).json({
            success: true,
            message: "User fetched successfully!",
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
            message: "Users fetched successfully!",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { value, error } = userDataValidation.validate(req.body)
        if (error) {
            return res.status(400).json({ error: error.details.map((err) => err.message) });
        }
        const result = await userService.updateUserInDB(req.params.userId, value)
        if (!result) {
            return res.json({
                "success": false,
                "message": "User not found",
                "error": {
                    "code": 404,
                    "description": "User not found!"
                }
            })
        }
        res.status(200).json({
            success: true,
            message: "User updated successfully!",
            data: result
        })
    } catch (error) {
        next(error)
    }
}
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userService.deleteUserInDB(req.params.userId)
        if (!result) {
            return res.json({
                "success": false,
                "message": "User not found",
                "error": {
                    "code": 404,
                    "description": "User not found!"
                }
            })
        }
        res.status(200).json({
            success: true,
            message: "User deleted successfully!",
            data: null
        })
    } catch (error) {
        next(error)
    }
}

const addUserOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userService.addUserOrderInDB(req.params.userId, req.body)
        if (!result) {
            return res.json({
                "success": false,
                "message": "User not found",
                "error": {
                    "code": 404,
                    "description": "User not found!"
                }
            })
        }
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: null
        })
    } catch (error) {
        next(error)
    }
}
const getUserAllOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userService.getUserAllOrdersFromDB(req.params.userId)
        if (!result) {
            return res.json({
                "success": false,
                "message": "User not found",
                "error": {
                    "code": 404,
                    "description": "User not found!"
                }
            })
        }
        res.status(200).json({
            success: true,
            message: "Order fetched successfully!",
            data: result[0]
        })
    } catch (error) {
        next(error)
    }
}
const getUserOrdersTotalPrice = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userService.getUserOrdersTotalPriceFromDB(req.params.userId)
        if (!result) {
            return res.json({
                "success": false,
                "message": "User not found",
                "error": {
                    "code": 404,
                    "description": "User not found!"
                }
            })
        }
        res.status(200).json({
            success: true,
            message: "Total price calculated successfully!",
            data: result[0]
        })
    } catch (error) {
        next(error)
    }
}

export { createUser, getAUser, getAllUsers, updateUser, deleteUser, addUserOrder, getUserAllOrders, getUserOrdersTotalPrice }