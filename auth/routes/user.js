import express from "express";
import {handleGetAllusers, handleGetUserById, handleCreateNewUser} from "../controllers/user.js";

const router = express.Router();

router.route("/").get(handleGetAllusers).post(handleCreateNewUser);


router.route("/:id")
.get(handleGetUserById);




export default router;