import { userEntity } from "../entities/User.entity";

import { LogSuccess, LogError } from "../../utils/logger";

// Periciones CRUD

/**
 * @function GetAllUser
 * @description Method to obtain all Users from collection "Users" in Mongo Server
 */
export const getAllUser = async (): Promise<any[] | undefined> => {
    try {
        let userModel = userEntity();

        // Search all Users
        return await userModel.find({},{isDelete: false});
    } catch (error) {
        LogError(`[ORM ERROR]: Getting all users: ${error}`);
    }
}

//  - Get User by ID
export const getUserByID = async (id: string) : Promise<any | undefined> => {
    try {
        let userModel = userEntity();
        
        // Search user By ID
        return await userModel.findById(id);
    } catch (error) {
        LogError(`[ORM ERROR]: Getting user by ID: ${error}`);
    }
}

//  - Delete User by ID
export const deleteUserByID = async (id: string) : Promise<any | undefined> => {
    try {
        let userModel = userEntity();
        
        // Search user By ID
        return await userModel.deleteOne({ _id: id });
    } catch (error) {
        LogError(`[ORM ERROR]: Deleting user by ID: ${error}`);
    }
}

//  - Create new User
export const createUser= async (user: any) : Promise<any | undefined> => {
    try {
        let userModel = userEntity();
        
        // Create / Insert new 
        return await userModel.create(user);
    } catch (error) {
        LogError(`[ORM ERROR]: Creating user: ${error}`);
    }
}

//  - Update User by ID
export const updateUserByID = async (id: string, user: any) : Promise<any | undefined> => {
    try {
        let userModel = userEntity();
        
        // Update 
        return await userModel.findByIdAndUpdate(id, user);
    } catch (error) {
        LogError(`[ORM ERROR]: Updating user ${id}: ${error}`);
    }
}

//  - Get User by Email
