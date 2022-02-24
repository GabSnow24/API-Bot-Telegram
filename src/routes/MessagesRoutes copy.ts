import { Router } from "express";
import { SendMessageControllers } from "../controllers/SendMessageControllers";

const SendMessageRoutes = Router();

SendMessageRoutes.post("/send-message", new SendMessageControllers().sendMessage);

export { SendMessageRoutes };
