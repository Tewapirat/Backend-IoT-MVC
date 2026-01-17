import { Routes } from "@/common/interfaces/routes.interface";
import { Router } from "express";
import { HelloWorldController } from "./hello_world.controller";
import Container from "typedi";

export class HelloWorldRoute implements Routes {
    public path = "/hello";
    public router = Router();

    private controller = Container.get(HelloWorldController);

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.controller.get);
        this.router.get(`${this.path}/:id`, this.controller.getById);
        this.router.post(`${this.path}`, this.controller.post);
        this.router.put(`${this.path}`, this.controller.put);
        this.router.delete(`${this.path}`, this.controller.delete);
    }
}