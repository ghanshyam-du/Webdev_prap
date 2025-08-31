import express from "express"
import User from "./user.js"


const router = express.Router();

router.post("/user", (req, res) => {
    try {
        const user = new User(req.body);
        user.save()
        res.send(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });

    }
});

export default router;