import { Document, model, Schema } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema: Schema = new Schema<User>({
    email: {type: String, required: true, unique: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    password: {type: String, required: true},
})

export const UserModel = model<User & Document>('User', UserSchema)