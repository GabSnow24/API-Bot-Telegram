import { MessagesServices } from "../services/MessagesServices";
import { MasterController } from "./MasterController";

class MessagesControllers extends MasterController{
  service: any 
  constructor(){
    super(new MessagesServices())
  }

}

export { MessagesControllers };
