import { Service } from "typedi";
import { UserModel } from "./schemas/user.schema";
import { User } from "./interface/user.interface";
import { hash } from "bcrypt";
import { CreateUserDto } from "./dto/user.dto";
import { HttpException } from "@/common/exceptions/HttpException";
import { UpdateUserDto } from "./dto/update-user.dto";
import { DeleteUserDto } from "./dto/delete-user.dto";
import { Document } from "mongoose";

@Service()
export class UserService {

    public async findAll(): Promise<User[]>{
        const users: User[] = await UserModel.find();
        return users
    }

    public async findById(userId:string): Promise<User>{
        const user: User = await UserModel.findOne({_id: userId});
        return user
    }

    public async create(user: CreateUserDto): Promise<User>{
        console.log("create user:", user)
        const obj:User = await UserModel.findOne({email:user.email})
        if (obj){
            throw new HttpException(409, `This email ${obj.email} already exsits`)
        }

        const hashPassword = await hash(user.password, 10)
        const newUser: User = await UserModel.create({...user, password: hashPassword})
        return newUser
    }

    public async update(updateUser: UpdateUserDto): Promise<User>{
        const findUser: User & Document = await UserModel.findById(updateUser._id)
        if (!findUser){
            throw new HttpException(404, `This user ${updateUser.frist_name} not found`)
        }

        findUser.frist_name = updateUser.frist_name
        findUser.last_name = updateUser.last_name
        await findUser.save()
        return findUser

    }

    public async delete(deleteUser: DeleteUserDto): Promise<User>{
        const findUser: User & Document = await UserModel.findById(deleteUser._id)
        if (!findUser){
            throw new HttpException(404, `User not found`)
        }

        findUser.deleteOne()
        return findUser
        

    }

}