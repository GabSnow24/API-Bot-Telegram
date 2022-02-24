import { GroupServices } from "../services/GroupServices";
import { MasterController } from "./MasterController";

class GroupControllers extends MasterController{
  service: any 
  constructor(){
    super(new GroupServices())
  }

}

export { GroupControllers };
