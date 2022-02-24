import { Request, Response } from "express";
import { MessagesServices } from "../services/MessagesServices";
import { SendMessageServices } from "../services/SendMessageServices";

class SendMessageControllers {
    service: any
    constructor(){
        this.service = new SendMessageServices()
    }
    sendMessage = async (request: Request, response: Response): Promise<any> => {
        const { messageId } = request.body;
        const messageService = new MessagesServices()
        const message = messageService.readOne(messageId)
        const result = await this.service.sendMessage(message);
        return response.status(200).json(result);
      }
}

export { SendMessageControllers }