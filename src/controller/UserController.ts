import { Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { IUserController } from "./interfaces";
import { LogSuccess, LogError, LogWarning } from "../utils/logger";

//ORM - User Collections
import { getAllUser, getUserByID, deleteUserByID, createUser, updateUserByID } from "../domain/orm/User.orm";

@Route("api/users")
@Tags("UserController")
export class UserController implements IUserController {
    /**
     * Endpoint to retrive the users in the collections Users of DBusers
     * @param {string} id Id of user to retrive (optional)
     * @returns All user or user found by Id
     */
    @Get("/")
    public async getUsers(@Query()id?: string): Promise<any> {
        let response: any;
        if(id){
            LogSuccess(`[/api/users] Get User By ID : ${id}`);
            response = await getUserByID(id);
        } else {
            LogSuccess('[/api/users] Get All Users Request');
            response = await getAllUser();
        }
        return response;
    }

    /**
     * Endpoint to delete the users in the collections Users of DB
     * @param {string} id Id of user to delete (optional)
     * @returns Message informing if deletion was correct.
     */
    @Delete("/")
    public async deleteUser(@Query()id?: string): Promise<any> {
        let response: any;
        if(id){
            LogSuccess(`[/api/users] Delete User By ID : ${id}`);
            await deleteUserByID(id).then((r) => {
                response = {
                    status: 204,
                    message: `User with id ${id} deleted successfuly.`
                }
            });
        } else {
            LogWarning('[/api/users] Delete User Request WITHOUT ID');
            response = {
                status: 400,
                message: "Please, provide an ID to remove from database."
            }
        }
        return response;
    }

    @Post("/")
    public async createUser(user: any): Promise<any> {
        let response: any = "";

        await createUser(user).then((r) => {
            LogSuccess(`[/api/users] Create User: ${user}`);
            response = {
                message: `User Created succesfully: ${user.name}`
            }
        })
        return response;
    }

    @Put("/")
    public async updateUser(@Query()id: string, user: any): Promise<any> {
        let response: any;
        if(id){
            LogSuccess(`[/api/users] Update User By ID : ${id}`);
            await updateUserByID(id, user).then((r) => {
                response = {
                    status: 204,
                    message: `User with id ${id} updated successfuly.`
                }
            });
        } else {
            LogWarning('[/api/users] Update User Request WITHOUT ID');
            response = {
                status: 400,
                message: "Please, provide an ID to update an existing user."
            }
        }
        return response;
    }
}
