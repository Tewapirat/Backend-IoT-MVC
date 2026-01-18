import { Routes } from "@/common/interfaces/routes.interface";
import { Router } from "express";
import { UserController } from "./user.controller";
import Container from "typedi";
import { ValidationMiddleware } from "@/common/middlewares/validation.middleware";
import { CreateUserDto } from "./dto/user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { DeleteUserDto } from "./dto/delete-user.dto";

export class UserRoute implements Routes {
    public path = "/user";
    public router = Router();


    private controller = Container.get(UserController)

    constructor(){
        this.initiazeRoute()

    }

    private initiazeRoute() {
        this.router.get(`${this.path}`, this.controller.get)
        this.router.get(`${this.path}/:id`, this.controller.getById)
        this.router.post(`${this.path}`,ValidationMiddleware(CreateUserDto),this.controller.create)
        this.router.put(`${this.path}`,ValidationMiddleware(UpdateUserDto),this.controller.update)
        this.router.delete(`${this.path}`,ValidationMiddleware(DeleteUserDto),this.controller.delete)


    }
    
}