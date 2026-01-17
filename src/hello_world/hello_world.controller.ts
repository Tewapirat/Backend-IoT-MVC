import { NextFunction, Request, Response } from "express";
import { Service } from "typedi";

@Service()
export class HelloWorldController {

    public get = (req:Request, res:Response, next:NextFunction) => {
        res.status(200).json({message: "Hello World!"})
    }

    public getById = (req:Request, res:Response, next:NextFunction) => {
        const id: string = req.params.id;
        res.status(200).json({message: "Hello World!", id: id})
    }

    public post = (req:Request, res:Response, next:NextFunction) => {
        const obj = req.body;
        res.status(201).json({message: "Created!", data: obj})
    }

        public put = (req:Request, res:Response, next:NextFunction) => {
        const obj = req.body;
        res.status(201).json({message: "Updated!", data: obj})
    }

        public delete = (req:Request, res:Response, next:NextFunction) => {
        const obj = req.body;
        res.status(201).json({message: "Deleted!", data: obj})
    }
}