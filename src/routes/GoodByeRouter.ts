import express, { Request, Response } from "express";
import { GoodByeController } from "../controller/GoodByeController";
import { LogInfo } from "../utils/logger";
import { GoodByeResponse } from "@/controller/types";
// Router from express
let goodbyteRouter = express.Router();

// http://localhost:8080/api/goodbye?name=Martin/
goodbyteRouter.route("/")
	// GET:
    .get(async (req: Request, res: Response) => {
        // Obtain a Query Param
        let name: any = req?.query?.name;
        LogInfo(`Query Param: ${name}`);
        // Controller Instance to excute method
        const controller: GoodByeController = new GoodByeController();
        // Obtain Reponse
        const response: GoodByeResponse = await controller.getMessage(name);
        // Send to the client the response
        return res.send(response);
    })

// Export Good Bye Router
export default goodbyteRouter;
