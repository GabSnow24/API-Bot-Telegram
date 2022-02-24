import { Router } from "express";
import { GroupControllers } from "../controllers/GroupControllers";

const GroupRoutes = Router();

GroupRoutes.get("/group", new GroupControllers().readAll);
GroupRoutes.post("/group", new GroupControllers().create);
GroupRoutes.get("/client/:id", new GroupControllers().readOne);
GroupRoutes.delete("/client/:id", new GroupControllers().delete);
GroupRoutes.put("/client/:id", new GroupControllers().update);

export { GroupRoutes };
