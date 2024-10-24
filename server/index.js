import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDB from "./data/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/UserRoutes.js";

dotenv.config();
const app = express();
const port = 5005;
connectDB();

app.use(express.json());
app.use(cors({
    origin: "*"
}));

app.use("/api/tasks", taskRoutes);
app.use("/api/user", userRoutes);

app.get('/', (req, res) => {
    res.send("Hello World");
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


