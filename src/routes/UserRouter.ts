import express, { Request, Response } from "express";
import { UserController } from "../controller/UserController";
import { LogInfo } from "../utils/logger";

// Router from express
let usersRouter = express.Router();

// http://localhost:8080/api/users?id=[_id]
usersRouter.route("/")
	// GET:
    .get(async (req: Request, res: Response) => {
        // Obtain a Query Param (ID)
        let id: any = req?.query?.id;
        LogInfo(`Query Param: ${id}`);
        // Controller Instance to excute method
        const controller: UserController = new UserController();
        // Obtain Response
        const response: any = await controller.getUsers(id);
        // Send to the client the response
        return res.status(200).send(response);
    })
    // DELETE:
    .delete(async (req: Request, res: Response) => {
        // Obtain a Query Param (ID)
        let id: any = req?.query?.id;
        LogInfo(`Query Param: ${id}`);
        // Controller Instance to excute method
        const controller: UserController = new UserController();
        // Obtain Response
        const response: any = await controller.deleteUser(id);
        // Send to the client the response
        return res.status(response.status).send(response);
    })
    // POST
    .post(async (req: Request, res: Response) => {
        let name: any = req?.query?.name;
        let email: any = req?.query?.email;
        let age: any = req?.query?.age;
        // Controller Instance to excute method
        const controller: UserController = new UserController();

        let user = {
            name: name || "default",
            email: email || "default email",
            age: age || 18
        }

        // Obtain Response
        const response: any = await controller.createUser(user);
        // Send to the client the response
        return res.status(201).send(response);
    })
    // PUT
    .put(async (req: Request, res: Response) => {
        // Obtain a Query Param (ID)
        let id: any = req?.query?.id;

        let name: any = req?.query?.name;
        let email: any = req?.query?.email;
        let age: any = req?.query?.age;

        LogInfo(`Query Params: ${id}, ${name}, ${email}, ${age}`);

        // Controller Instance to excute method
        const controller: UserController = new UserController();

        let user = {
            name: name,
            email: email,
            age: age
        }

        // Obtain Response
        const response: any = await controller.updateUser(id, user);
        // Send to the client the response
        return res.status(response.status).send(response);
    })

// Export User Router
export default usersRouter;

/**
 * Get Documents => 200 OK
 * Creation Documents => 201 OK
 * Deletion of Documents => 200 (Entity) / 204 (Not Return)
 * Update of Documents => 200 (Entity) / 204 (Not Return)
 */
