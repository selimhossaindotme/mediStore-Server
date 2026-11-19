import app from "./app";
import envVars from "./app/config";
import { prisma } from "./lib/prisma";

const port = envVars.PORT || 5000;

const startServer = async () => {
    try {
        // Start the server
        await prisma.$connect();
        console.log("Connected to the database");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    } catch (error) {
        console.error("Error starting the server:", error);
    }
}

startServer();