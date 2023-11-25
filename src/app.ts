import express, { Application, NextFunction, Request, Response } from "express"
import userRouter from "./app/modules/user/user.route";
const app: Application = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.json({ success: true, message: "Server is running" })
})

app.use('/api/users', userRouter)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ error: "Route not found." });
});


// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        success: false,
        message: err.message
    })
});
export default app