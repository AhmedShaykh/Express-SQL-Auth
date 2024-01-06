import AuthenticationController from "../controller/AuthenticationController";
import BaseRoutes from "./BaseRouter";

class AuthenticationRoutes extends BaseRoutes {

    public routes(): void {
        this.router.post("/register", AuthenticationController.register);
        this.router.post("/login", AuthenticationController.login);
    };
};

export default new AuthenticationRoutes().router;