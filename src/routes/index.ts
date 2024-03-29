/**
 * Root Router
 * Redirect to Routers
 */

import express, { Request, Response } from "express";
import helloRouter from "./HelloRouter";
import { LogInfo } from "../utils/logger";
import goodbyteRouter from "./GoodByeRouter";
import usersRouter from "./UserRouter";
import katasRouter from "./KatasRouter";
import authRouter from "./AuthRouter";

// Server Instance
let server = express();

// Activate for requests to http://localhost:8000/api

// Router instance
let rootRouter = express.Router();

// Activate for request to http://localhost:8000/api

// GET: http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('GET: http://localhost:8000/api/')
    // Send Hello World
    res.send('Welcome to my API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose');
});

// Redirections to Routers & Controllers
server.use('/', rootRouter); // http://localhost:8000/api/
server.use('/hello', helloRouter); // http://localhost:8000/api/hello --> HelloRouter
server.use('/goodbye', goodbyteRouter); // http://localhost:8000/api/goodbye --> GoodByeRouter
// Add more routes to the app
server.use('/users', usersRouter); // http://localhost:8000/api/users --> UserRouter
server.use('/katas', katasRouter); // http://localhost:8000/api/katas --> KatasRouter
// Auth routes
server.use('/auth', authRouter); // http://localhost:8000/api/auth --> AuthRouter

export default server;
