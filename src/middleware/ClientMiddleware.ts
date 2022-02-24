import { MasterMiddleware } from "./MasterMiddleware";

class ClientMiddleware extends MasterMiddleware{
    constructor(){
        super('client')
    }
}

export { ClientMiddleware }