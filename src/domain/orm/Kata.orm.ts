import { kataEntity } from "../entities/Kata.entity";

import { LogSuccess, LogError } from "../../utils/logger";

// Periciones CRUD

/**
 * @function getAllKata
 * @description Method to obtain all Katas from collection "Katas" in Mongo Server
 */
export const getAllKata = async (): Promise<any[] | undefined> => {
    try {
        let katasModel = kataEntity();

        // Search all Users
        return await katasModel.find({},{isDelete: false});
    } catch (error) {
        LogError(`[ORM ERROR]: Getting all katas: ${error}`);
    }
}

//  - Get Kata by ID
export const getKataByID = async (id: string) : Promise<any | undefined> => {
    try {
        let katasModel = kataEntity();
        
        // Search user By ID
        return await katasModel.findById(id);
    } catch (error) {
        LogError(`[ORM ERROR]: Getting user by ID: ${error}`);
    }
}

//  - Delete Kata by ID
export const deleteKataByID = async (id: string) : Promise<any | undefined> => {
    try {
        let katasModel = kataEntity();
        
        // Search user By ID
        return await katasModel.deleteOne({ _id: id });
    } catch (error) {
        LogError(`[ORM ERROR]: Deleting user by ID: ${error}`);
    }
}

//  - Create new Kata
export const createKata= async (kata: any) : Promise<any | undefined> => {
    try {
        let katasModel = kataEntity();
        
        // Create / Insert new 
        return await katasModel.create(kata);
    } catch (error) {
        LogError(`[ORM ERROR]: Creating user: ${error}`);
    }
}

//  - Update Kata by ID
export const updateKataByID = async (id: string, kata: any) : Promise<any | undefined> => {
    try {
        let katasModel = kataEntity();
        
        // Update 
        return await katasModel.findByIdAndUpdate(id, kata);
    } catch (error) {
        LogError(`[ORM ERROR]: Updating user ${id}: ${error}`);
    }
}

// Debes poder filtrar las Katas disponibles por nivel de dificultad

// Debes poder obtener las 5 Katas más recientes

// Debes poder listar las Katas ordenadas de mejor valoradas a menos valoradas

// Debes poder valorar una Kata con una nueva nota y debe almacenarse la media
// - Por lo que el modelo de Kata deberá tener un valor que será número de valoraciones
//   de usuarios, para así obtener la media

// Debes poder encontrar las Katas ordenadas por intentos