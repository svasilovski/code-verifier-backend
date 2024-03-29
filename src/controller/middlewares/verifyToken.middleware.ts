import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

/**
 * 
 * @param {Request} req Original request previous middleqare of verificaion JWT
 * @param {Response} res Response to vetificaion JWT
 * @param {NextFunction} next Next function to be executed
 * @returns Error of verification or next execution
 */
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {

    // Check HEADER Request for "x-access-token"
    let token: any = req.headers["x-access-token"];

    // Verify if jwt is present
    if(!token) {
        return res.status(403).send({
            authenticationError: "Missing JWT in request",
            message: "Not authorised to consume this endpoint"
        });
    }

    // Verify the token obtained
    jwt.verify(token, "", (err: any, decoded: any) => {

        if(err){
            return res.status(500).send({
                authenticationError: "JWT verification failed",
                message: "Failed to verify JWT token in request"
            });
        }

        // If JWT is OK

        // Execute Next Function -> Protected Routes will be executed
        next();
    });
}
