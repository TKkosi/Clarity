import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDB from "./data/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/UserRoutes.js";
import noteRoutes from "./routes/notesRoutes.js";
import activitiesRoutes from "./routes/activitiesRoutes.js";

dotenv.config();
const app = express();
const port = 5005;
connectDB();

app.use(express.json());
app.use(cors({
    origin: ["https://alpha-clarity.vercel.app","http://localhost:5173"],
}));

app.use("/api/tasks", taskRoutes);
app.use("/api/user", userRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/activities", activitiesRoutes);

app.get('/', (req, res) => {
    res.send("Hello World");
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


