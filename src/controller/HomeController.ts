import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class HomeController {


    async home(request: Request, response: Response, next: NextFunction) {
        
        response.render("home");
    }

    async foo(request: Request, response: Response, next: NextFunction) {
        
        response.render("foo");
    }

}