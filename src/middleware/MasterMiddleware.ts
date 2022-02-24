import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/token';



class MasterMiddleware{
    public type: any
    constructor(type: any){
        this.type = type;
    }
    ensureAuthenticated = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
        if(!request.headers.authorization)
                return response.status(403).send({auth:false, message: 'Token não provido'})
        const token:any = request.headers.authorization.split(' ')[1];
        try {
            console.log('samuel')
            const{ userID } = verifyToken(token);
            if(!userID)
                return response.status(403).send({auth:false, message: 'Cliente não autorizado'})
            return next()
        }catch(err){
            console.log(err)
            return response.status(401).json({auth: false, message:"Token expirado"})
        }
    
    
    }

}

export { MasterMiddleware }