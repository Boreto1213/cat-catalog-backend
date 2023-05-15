import express from "express";

import { createCat, getCats } from "../controllers/cats.js";

const router = express.Router();

router.get("/", getCats);
router.post("/upload", createCat);

export default router;