import {BasicResponse, GoodByeResponse } from "../types";

export interface IHelloController {
	getMessage(name?:string): Promise<BasicResponse>;
}

export interface IGoodByeController {
	getMessage(name?:string): Promise<GoodByeResponse>;
}

export interface IUserController {
	// Read all users from database || get user by ID
	getUsers(id?: string): Promise<any>;
	// Delete user by ID
	deleteUser(id?: string): Promise<any>;
	// Create new user
	createUser(user: any): Promise<any>;
	// Update user by ID
	updateUser(id: string, user: any): Promise<any>;

}
