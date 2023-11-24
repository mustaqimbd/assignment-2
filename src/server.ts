import app from "./app";
import mongoose from "mongoose";
import { databaseUrl, port } from "./app/config/config";

const run = async () => {
    try {
        await mongoose.connect(databaseUrl as string)
            .then(() => console.log('Connected to MongoDB'))
            .catch(err => console.error('Failed to connect to MongoDB', err));

        app.listen(port, () => console.log(`Server is running on ${port} port`))
    } catch (error) {
        console.log(error)
    }
}
run()