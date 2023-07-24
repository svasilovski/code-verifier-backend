import express, { Request, Response } from "express";
import { KatasController } from "../controller/KataController";
import { LogInfo } from "../utils/logger";

// Router from express
let katasRouter = express.Router();

// http://localhost:8080/api/users?id=[_id]
katasRouter.route("/")
	// GET:
    .get(async (req: Request, res: Response) => {
        // Obtain a Query Param (ID)
        let id: any = req?.query?.id;
        LogInfo(`Query Param: ${id}`);
        // Controller Instance to excute method
        const controller: KatasController = new KatasController();
        // Obtain Response
        const response: any = await controller.getKatas(id);
        // Send to the client the response
        return res.send(response);
    })
    // DELETE:
    .delete(async (req: Request, res: Response) => {
        // Obtain a Query Param (ID)
        let id: any = req?.query?.id;
        LogInfo(`Query Param: ${id}`);
        // Controller Instance to excute method
        const controller: KatasController = new KatasController();
        // Obtain Response
        const response: any = await controller.deleteKata(id);
        // Send to the client the response
        return res.send(response);
    })
    // POST
    .post(async (req: Request, res: Response) => {
        let name: any = req?.query?.name;
        let description: any = req?.query?.description;
        let level: any = req?.query?.level;
        let user: any = req?.query?.user;
        let date: any = req?.query?.date;
        let valoration: any = req?.query?.valoration;
        let chances: any = req?.query?.chances;

        LogInfo(`Query Params: ${name}, ${description}, ${level}, ${user}, ${date}, ${valoration}, ${chances}`);

        // Controller Instance to excute method
        const controller: KatasController = new KatasController();

        let kata ={
            name: name || "default",
            description:  description || "default",
            level: level ||  "default",
            user: user || "default",
            date: date || new Date(),
            valoration: valoration || 5,
            chances: chances || 0
        }

        // Obtain Response
        const response: any = await controller.createKata(kata);
        // Send to the client the response
        return res.send(response);
    })
    // PUT
    .put(async (req: Request, res: Response) => {
        // Obtain a Query Param (ID)
        let id: any = req?.query?.id;

        let name: any = req?.query?.name;
        let description: any = req?.query?.description;
        let level: any = req?.query?.level;
        let user: any = req?.query?.user;
        let date: any = req?.query?.date;
        let valoration: any = req?.query?.valoration;
        let chances: any = req?.query?.chances;

        LogInfo(`Query Params: ${id}, ${name}, ${description}, ${level}, ${user}, ${date}, ${valoration}, ${chances}`);

        // Controller Instance to excute method
        const controller: KatasController = new KatasController();

        let kata ={
            name: name,
            description:  description,
            level: level,
            user: user,
            date: date,
            valoration: valoration,
            chances: chances
        }

        // Obtain Response
        const response: any = await controller.updateKata(id, kata);
        // Send to the client the response
        return res.send(response);
    })

// Export Katas Router
export default katasRouter;
