import { Request, Response } from "express";
import prismaClient from "../prisma";
import { AuthenticableEntities } from "../services/AuthenticableEntities";

class AuthenticableControllers{
    async login(request: Request, response: Response){
        const service = new AuthenticableEntities() 
        if(!request.body.email || !request.body.password){
            return response.status(200).json({ auth: false, message: "Corpo da requisição incorreto" });
        }
        const logado = await service.login(request.body);
        if (!logado) {
            return response.status(200).json({ auth: false, message: "Email ou senha do cliente incorretos!" });
        }
        return response.status(200).json({ auth: true, token: logado.token, user: logado.user })
    }

}

export { AuthenticableControllers }