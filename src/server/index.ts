import express, { Express, Request, Response } from "express";

// Security
import cors from "cors";
import helmet from "helmet";

// TODO Https

// Root routes
import rootRouter from "../routes";

// Create Espress APP
const server: Express = express();
// const port: string | number = process.env.PORT || 8000;

// Define SERVER to use "/api" and use rootRouter from "index.ts" in routes
// from this point onover: http://localhost:8000/api
server.use('/api', rootRouter);

// TODO Mongo connection

// Security config
server.use(helmet());
server.use(cors());

// Content type
server.use(express.urlencoded({extended: true, limit: "50mb"}));
server.use(express.json({limit: "50mb"}));

// * Redirection Config
// http://localhost:8000/ ---> http://localhost:8000/api/
server.get("/",  (req: Request, res: Response) => {
	res.redirect("/api");
});

export default server;
