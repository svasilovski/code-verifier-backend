import express, { Request, Response } from "express";
import { AuthController } from "../controller/AuthController";
import { LogInfo } from "../utils/logger";
import { IUser } from "src/domain/interfaces/IUser.Interface";
import { IAuth } from "src/domain/interfaces/IAuth.Interface";

// BCRYPT for password
import bcrypt from "bcrypt";

// Router from express
let authRouter = express.Router();

authRouter.route('/auth/register')
    .post(async (req: Request, res: Response) => {
        let {name, email, password, age} = req.body;
        let hashedPassword = "";

        if(name && password && email && age){
            // Obtain the password in Request and cryper
            hashedPassword = bcrypt.hashSync(password, 8);

            let user: IUser = {
                name,
                email,
                password: hashedPassword,
                age
            }

            // Controller Instance to excute method
            const controller: AuthController = new AuthController();
            
            // Obtain Response
            const response: any = await controller.registerUser(user);

            // Send to the client the response
            return res.status(200).send(response);
        }
    });

authRouter.route('/auth/login')
    .post(async (req: Request, res: Response) => {
        let {email, password} = req.body;

        if(password && email){
            // Controller Instance to excute method
            const controller: AuthController = new AuthController();

            let auth: IAuth = {
                email,
                password
            }
            
            // Obtain Response
            const response: any = await controller.loginUser(auth);

            // Send to the client the response which includes the JWT to quthorize query requests
            return res.status(200).send(response);
        }
    });

// Export Auth Router
export default authRouter;
