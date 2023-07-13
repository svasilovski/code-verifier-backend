import express, { Express, Request, Response } from "express";

// Swagger
import SwaggerUi from "swagger-ui-express";

// Security
import cors from "cors";
import helmet from "helmet";

// TODO Https

// Root routes
import rootRouter from "../routes";
import mongoose from "mongoose";

// Create Espress APP
const server: Express = express();
// const port: string | number = process.env.PORT || 8000;

// * Swagger config and route
server.use(
	'/docs',
	SwaggerUi.serve,
	SwaggerUi.setup(undefined, {
		swaggerOptions: {
			url: "/swagger.json",
			explorer: true
		}
	})
)

// Define SERVER to use "/api" and use rootRouter from "index.ts" in routes
// from this point onover: http://localhost:8000/api
server.use('/api', rootRouter);

// static server
server.use(express.static('public'));

// TODO Mongo connection
// NOTE: Se cambio localhost:27017 por 0.0.0.0:27017 ya que daba error de conexión.
mongoose.connect('mongodb://127.0.0.1:27017/codeverificaton');

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
