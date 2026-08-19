import express from "express";
import { createManager, getManager } from "../controllers/managerControllers.js";

const router = express.Router();

router.get("/cognitoId", getManager);
router.get("/cognitoId", createManager);

export default router;
