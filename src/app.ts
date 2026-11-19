import express, { type Request, type Response } from "express"
import cors from "cors"
import envVars from "./app/config"

const app: express.Application = express()


// Middleware
app.use(cors({
    origin: envVars.APP_URL,
    credentials: true,
}))
app.use(express.json())


app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!")
})

export default app