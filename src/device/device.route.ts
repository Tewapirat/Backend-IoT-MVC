import { Routes } from "@/common/interfaces/routes.interface";
import { Router } from "express";
import { DeviceController } from "./device.controller";
import Container from "typedi";
import { AuthMiddleware } from "@/common/middlewares/auth.middleware";
import { ValidationMiddleware } from "@/common/middlewares/validation.middleware";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { UpdateDeviceDto } from "./dto/update-device.dto";
import { DeleteDeviceDto } from "./dto/delete-device.dto";

export class DeviceRoute implements Routes{
    public path = "/device";
    public router = Router();
    
    private controller: DeviceController = Container.get(DeviceController)

    constructor(){
        this.initalizeRoute()
    }

    private initalizeRoute(){
        this.router.get(`${this.path}`,AuthMiddleware,this.controller.get)
        this.router.get(`${this.path}/:id`,AuthMiddleware, this.controller.getById)
        this.router.post(`${this.path}`,AuthMiddleware ,ValidationMiddleware(CreateDeviceDto), this.controller.create)
        this.router.put(`${this.path}`,AuthMiddleware,ValidationMiddleware(UpdateDeviceDto), this.controller.update)
        this.router.delete(`${this.path}`,AuthMiddleware,ValidationMiddleware(DeleteDeviceDto), this.controller.delete)

    }
}