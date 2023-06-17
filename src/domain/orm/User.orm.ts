import { userEntity } from "../entities/User.entity";

import { LogSuccess, LogError } from "@/utils/logger";

// Periciones CRUD

/**
 * @function GetAllUser
 * @description Method to obtain all Users from collection "Users" in Mongo Server
 */
export const GetAllUser = async (): Promise<any[] | undefined> => {
    try {
        let userModel = userEntity();

        // Search all Users
        return await userModel.find({isDelete: false});
    } catch (error) {
        LogError(`[ORM ERROR]: Getting all users: ${error}`);
    }
}

// TODO:
//  - Get User by ID
//  - Get User by Email
//  - Delete User by ID
//  - Create User
//  - Update User by ID
