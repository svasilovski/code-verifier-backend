import { userEntity } from "../entities/User.entity";

import { LogSuccess, LogError } from "../../utils/logger";
import { IUser } from "../interfaces/IUser.Interface";
import { IAuth } from "../interfaces/IAuth.Interface";

// BCRYPT for passwords
import bcrypt from "bcrypt";

// JWT
import jwt from "jsonwebtoken";

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

// Register User
export const registerUser= async (user: IUser) : Promise<any | undefined> => {
    try {
        let userModel = userEntity();
        
        // Create / Insert new 
        return await userModel.create(user);
    } catch (error) {
        LogError(`[ORM ERROR]: Creating user: ${error}`);
    }
}

// Login User
export const loginUser = async (auth:IAuth) : Promise<any | undefined> => {
    try {
        let userModel = userEntity();
        
        // Find user by email
        userModel.findOne({email: auth.email}, (err: any, user: IUser) => {
            if(err) {
                // TODO: Return Error --> ERROR while searching (500)
            }
            
            if(!user) {
                // TODO: Return Error --> ERROR USER NOT FOUND (404)
            }

            // Use bcrypt to compare passwords
            let validPassword = bcrypt.compareSync(auth.password, user.password);

            if(!validPassword){
                // TODO: --> NOT AUTHORISED (401)
            }

            // Create JWT
            // TODO: Secretmust be in .env
            let token = jwt.sign({emai: user.email}, "MYSECRETWORD", {
                expiresIn: "2h"
            });

            return token;
        });
    } catch (error) {
        LogError(`[ORM ERROR]: Creating user: ${error}`);
    }
}

// Logout User
export const logoutUser = async () : Promise<any | undefined> => {
    // TODO: NOT IMPLEMENTED
}


