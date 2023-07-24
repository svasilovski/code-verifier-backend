import { Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { IKatasController } from "./interfaces";
import { LogSuccess, LogError, LogWarning } from "../utils/logger";

//ORM - User Collections
import { getAllKata, getKataByID, deleteKataByID, createKata, updateKataByID } from "../domain/orm/Kata.orm";


@Route("api/katas")
@Tags("KatasController")
export class KatasController implements IKatasController {
    /**
     * Endpoint to retrive the Katas in the collections Katas of DB.
     * @param {string} id Id of Kata to retrive (optional).
     * @returns All Katas or Kata found by Id.
     */
    @Get("/")
    public async getKatas(@Query()id?: string | undefined): Promise<any> {
        let response: any;
        if(id){
            LogSuccess(`[/api/katas] Get Kata By ID : ${id}`);
            response = await getKataByID(id);
        } else {
            LogSuccess('[/api/katas] Get All Katas Request');
            response = await getAllKata();
        }
        return response;
    }

    /**
     * Endpoint to delete the Katas in the collections Katas of DB.
     * @param {string} id Id of Kata to retrive.
     * @returns Message informing if deletion was correct.
     */
    @Delete("/")
    public async deleteKata(@Query()id?: string | undefined): Promise<any> {
        let response: any;
        if(id){
            LogSuccess(`[/api/katas] Delete Katas By ID : ${id}`);
            await deleteKataByID(id).then((r) => {
                response = {
                    message: `Kata with id ${id} deleted successfuly.`
                }
            });
        } else {
            LogWarning('[/api/katas] Delete Katas Request WITHOUT ID');
            response = {
                message: "Please, provide an ID to remove from database."
            }
        }
        return response;
    }

    /**
     * Endpoint to Update the Katas in the collections Katas of DB.
     * @param {object} kata Object of Kata to retrive.
     * @returns Message informing if creation was correct.
     */
    @Post("/")
    public async createKata(kata: any): Promise<any> {
        let response: any = "";

        await createKata(kata).then((r) => {
            LogSuccess(`[/api/kata] Create Katas: ${kata}`);
            response = {
                message: `Kata Created succesfully: ${kata.name}`
            }
        })
        return response;
    }

    /**
     * Endpoint yo Update the Katas in the collections Katas of DB.
     * @param {string} id Id of Kata to retrive.
     * @param {object} kata Object of Kata to retrive.
     * @returns Message informing if update was correct.
     */
    @Put("/")
    public async updateKata(@Query()id: string, kata: any): Promise<any> {
        let response: any;
        if(id){
            LogSuccess(`[/api/kata] Update Kata By ID : ${id}`);
            await updateKataByID(id, kata).then((r) => {
                response = {
                    message: `Kata with id ${id} updated successfuly.`
                }
            });
        } else {
            LogWarning('[/api/kata] Update Kata Request WITHOUT ID');
            response = {
                message: "Please, provide an ID to update an existing kata."
            }
        }
        return response;
    }
}
