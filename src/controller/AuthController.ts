import { Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { IAuthController } from "./interfaces";
import { LogSuccess, LogError, LogWarning } from "../utils/logger";
import { IUser } from "../domain/interfaces/IUser.Interface";
import { IAuth } from "../domain/interfaces/IAuth.Interface";

//ORM - User Collections
import { registerUser, loginUser, logoutUser } from "../domain/orm/User.orm";

@Route("api/auth")
@Tags("AuthController")
export class AuthController implements IAuthController {

    @Post("/register")
    public async registerUser(user: IUser): Promise<any> {
        let response: any = "";
        if(user){
            LogSuccess(`[/api/auth/register] Register new User : ${user}`);
            await registerUser(user).then((r) => {
                LogSuccess(`[/api/auth/register] Register User: ${user}`);
                response = {
                    message: `User Created succesfully: ${user.name}`
                }
            });
        } else {
            LogWarning('[/api/auth/register] Registrt meeds User Entity');
            response = {
                status: 400,
                message: "Please, provide an User to create one."
            }
        }
        return response;
    }

    @Post("/login")
    public async loginUser(auth: IAuth): Promise<any> {
        let response: any = "";

        if(auth){
            LogSuccess(`[/api/auth/login] Login User : ${auth.email}`);
            await loginUser(auth).then((r) => {
                LogSuccess(`[/api/auth/register] Logged in User: ${auth.email}`);
                response = {
                    message: `User Logged In succesfully: ${auth.email}`,
                    token: r.token // JWT generated for logged in user
                }
            });
        } else {
            LogWarning('[/api/auth/login] Login meeds Auth Entity (email and password)');
            response = {
                status: 400,
                message: "Please, provide email and password to login."
            }
        }
        return response;
    }

    @Post("/logout")
    public async logoutUser(): Promise<any> {
        let response: any = "";
        // TODO: Close session of user
        throw new Error("Method not implemented.");
    }

}