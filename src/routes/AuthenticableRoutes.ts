import { Router } from "express";
import AuthControllers from "../controllers/AuthController";
import { AuthenticableControllers } from "../controllers/AuthenticableControllers";

const AuthenticableRoutes = Router();

AuthenticableRoutes.post("/client/login", new AuthenticableControllers().login);
AuthenticableRoutes.get("/verify-token", new AuthControllers().verifyToken);
AuthenticableRoutes.get("/token", new AuthControllers().getTokenData);

export { AuthenticableRoutes };
