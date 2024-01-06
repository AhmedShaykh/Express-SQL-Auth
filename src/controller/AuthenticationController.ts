import { AuthenticationService } from "../service/Authentication";
import { Request, Response } from "express";

class AuthenticationController {

    async login(req: Request, res: Response) {

        try {

            const { email, password } = req.body;

            const token = await new AuthenticationService().login(email, password);

            if (token === "") {
                return res.status(400).json({
                    status: "Bad Request!",
                    message: "Wrong Email Or Password!"
                });
            }

            const res_token = { type: "Bearer", token: token };

            return res.status(200).json({
                status: "Ok!",
                message: "Successfully Login!",
                result: res_token
            });

        } catch (error) {

            return res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });

        }
    };

    async register(req: Request, res: Response) {

        try {

            const { name, username, email, password } = req.body;

            await new AuthenticationService().register(
                email,
                password,
                name,
                username
            );

            return res.status(200).json({
                status: "Ok!",
                message: "Successfully Registerd Users!",
            });

        } catch (error) {

            return res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });

        }
    };
};

export default new AuthenticationController();