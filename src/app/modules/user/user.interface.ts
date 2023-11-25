import { Model } from "mongoose";

type TOrder = {
    productName: string;
    price: number;
    quantity: number;
};

type TUser = {
    userId: number;
    username: string;
    password: string;
    fullName: {
        firstName: string;
        lastName: string;
    };
    age: number;
    email: string;
    isActive: boolean;
    hobbies: string[];
    address: {
        street: string;
        city: string;
        country: string;
    };
    orders?: TOrder[];
};

interface TUserModel extends Model<TUser> {
    isNotUserEXist(id: string): Promise<TUser | null>
}

export { TUser, TUserModel }