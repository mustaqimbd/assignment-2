import { Document, Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt"

interface IUserDocument extends TUser, Document { }

const fullNameSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
})

const addressSchema = new Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
})

const orderSchema = new Schema({
    productName: { type: String },
    price: { type: Number },
    quantity: { type: Number }
})

const userSchema = new Schema<IUserDocument>({
    userId: { type: Number, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    fullName: { type: fullNameSchema, required: true },
    age: { type: Number, required: true },
    email: { type: String, unique: true, required: true },
    isActive: { type: Boolean, required: true },
    hobbies: { type: [String], required: true },
    address: { type: addressSchema, required: true },
    orders: { type: [orderSchema] },
})

userSchema.pre('save', async function (next) {
    const hashingPass = await bcrypt.hash(this.password, 10)
    this.password = hashingPass
    next()
})

userSchema.methods.toJSON = function () {
    const user = this.toObject()
    delete user.password
    delete user.orders
    delete user._id
    delete user.fullName._id
    delete user.address._id
    delete user.__v
    return user
}



const UserModel = model<IUserDocument>('user', userSchema)

export default UserModel