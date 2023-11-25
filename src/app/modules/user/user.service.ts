import { TUser } from "./user.interface";
import UserModel from "./user.model";

const createUserInDB = async (data: TUser) => {
    const result = await UserModel.create(data)
    return result
}

const getAUserFromDB = async (id: string) => {
    const result = await UserModel.findOne({ userId: id })
    return result
}

const getAllUsersFromDB = async () => {
    const result = await UserModel.find().select(["username", "fullName", "age", "email", "address"])
    return result
}

export const userService = { createUserInDB, getAUserFromDB, getAllUsersFromDB }