import express, { Application, NextFunction, Request, Response } from "express"
import userRouter from "./app/modules/user/user.route";
const app: Application = express()

app.use(express.json())

app.use('/api/users', userRouter)


// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req: Request, res: Response, next: NextFunction) => {
    console.log("err in middleware func",err)
    res.status(500).json({
        success: false,
        message: err.message
    })
});
export default app