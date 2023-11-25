import { TUser } from "./user.interface";
import UserModel from "./user.model";

const createUserInDB = async (data: TUser) => {
    const result = await UserModel.create(data)
    return result
}

export const userService = { createUserInDB }