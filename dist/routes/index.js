import { Router } from "express";
import { hello } from "./controllers/convert.controller.js";
const router = Router();
router.get('/api/hello', hello);
export default router;
