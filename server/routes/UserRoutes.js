import express from "express"

const router = express.Router();

router.post("/register", registerUser),
router.post("/login", loginUser),
router.get("/logout", logout),
router.get("/User", getUser),
router.put("/User",updateUser),




// export default router;