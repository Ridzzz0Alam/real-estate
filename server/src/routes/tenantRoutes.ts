import express from "express";
import { createTenant, getTenant } from "../controllers/tenantControllers.js";

const router = express.Router();

router.get("/cognitoId", getTenant);
router.get("/cognitoId", createTenant);

export default router;
