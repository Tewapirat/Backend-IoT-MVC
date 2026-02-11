import { Routes } from "@/common/interfaces/routes.interface";
import { Router } from "express";
import Container from "typedi";
import { DeviceLogController } from "./device-log.controller";
import { AuthMiddleware } from "@/common/middlewares/auth.middleware";
import { ValidationMiddleware } from "@/common/middlewares/validation.middleware";
import { DeleteLogDto } from "./dto/delete-log.dto";



export class DeviceLogRoute implements Routes {
    public path = "/log";
    public router = Router();


    private controller = Container.get(DeviceLogController)

    constructor(){
        this.initiazeRoute()
    }


    private initiazeRoute(){
        this.router.get(`${this.path}/:device_id`,AuthMiddleware, this.controller.get)
        this.router.get(`${this.path}/current/:device_id`,AuthMiddleware, this.controller.getLogCurrent)
        // this.router.get(`${this.path}/:id, ${this.controller.getById}`)
        // this.router.post(`${this.path}, ${this.controller.create}`)
        // this.router.put(`${this.path}, ${this.controller.update}`)
        this.router.delete(`${this.path}`,AuthMiddleware,ValidationMiddleware(DeleteLogDto), this.controller.delete)

    }
}