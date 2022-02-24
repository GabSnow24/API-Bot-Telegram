import { Router } from "express";
import { MessagesControllers } from "../controllers/MessagesControllers";

const MessagesRoutes = Router();

MessagesRoutes.get("/messages", new MessagesControllers().readAll);
MessagesRoutes.post("/messages", new MessagesControllers().create);
MessagesRoutes.get("/messages/:id", new MessagesControllers().readOne);
MessagesRoutes.delete("/messages/:id", new MessagesControllers().delete);
MessagesRoutes.put("/messages/:id", new MessagesControllers().update);

export { MessagesRoutes };
