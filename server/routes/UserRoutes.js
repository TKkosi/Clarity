import express from "express"
import { getUser, loginUser, registerUser, updateUser } from "../controllers/userController.js";
import protect from "../middlewares/protect.js";

const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/getUser", protect, getUser)
router.put("/User",protect, updateUser)




export default router;