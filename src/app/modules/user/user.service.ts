import { TUser } from "./user.interface";
import UserModel from "./user.model";

const createUserInDB = async (data: TUser) => {
    const result = await UserModel.create(data)
    return result
}

const getAUserFromDB = async (id: string) => {
    const user = await UserModel.isNotUserEXist(id)
    if (!user) {
        return user
    }
    const result = await UserModel.findOne({ userId: id })
    return result
}

const getAllUsersFromDB = async () => {
    const result = await UserModel.find().select(["username", "fullName", "age", "email", "address"])
    return result
}

const updateUserInDB = async (id: string, data: TUser) => {
    const user = await UserModel.isNotUserEXist(id)
    if (!user) {
        return user
    }
    const result = await UserModel.findOneAndUpdate({ userId: id },
        { $set: { ...data } }, { new: true }
    )
    return result
}

const deleteUserInDB = async (id: string) => {
    const user = await UserModel.isNotUserEXist(id)
    if (!user) {
        return user
    }
    const result = await UserModel.deleteOne({ userId: id })
    return result
}

const addUserOrderInDB = async (id: string, data: TUser) => {
    const user = await UserModel.isNotUserEXist(id)
    if (!user) {
        return user
    }
    const result = await UserModel.updateOne(
        { userId: id },
        { $push: { orders: data } }
    );
    return result
}

const getUserAllOrdersFromDB = async (id: string) => {
    const user = await UserModel.isNotUserEXist(id)
    if (!user) {
        return user
    }
    const result = await UserModel.aggregate([
        { $match: { userId: parseInt(id) }, },
        { $project: { orders: 1, _id: 0 } },
    ]);
    return result
}

const getUserOrdersTotalPriceFromDB = async (id: string) => {
    const user = await UserModel.isNotUserEXist(id)
    if (!user) {
        return user
    }
    const result = await UserModel.aggregate([
        { $match: { userId: parseInt(id) } },
        { $project: { orders: 1 } },
        { $unwind: '$orders' },
        {
            $group: {
                _id: null,
                totalPrice: { $sum: { $multiply: ['$orders.quantity', '$orders.price'] } }
            }
        },
        { $project: { _id: 0, totalPrice: 1 } }
    ]);
    return result
}
export const userService = { createUserInDB, getAUserFromDB, getAllUsersFromDB, updateUserInDB, deleteUserInDB, addUserOrderInDB, getUserAllOrdersFromDB, getUserOrdersTotalPriceFromDB }