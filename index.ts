import dotenv from "dotenv";
import server from "./src/server";
import { LogError, LogSuccess } from "./src/utils/logger";
import { error } from "console";

// * Config the .env file
dotenv.config();
const port = process.env.PORT || 8000

// * Execute SERVER
server.listen(port, () => {
	LogSuccess(`[SERVER ON]: Runing in http://localhost:${port}/api`);
});

// * Control SERVER ERROR
server.on('error', () => {
	LogError(`[SERVER ERROR]: ${error}`);
});
