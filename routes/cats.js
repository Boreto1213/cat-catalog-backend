import express from "express";

import { createCat, getCats, updateCat, deleteCat } from "../controllers/cats.js";

const router = express.Router();

router.get("/", getCats);
router.post("/upload", createCat);
router.patch("/:id", updateCat);
router.delete("/:id", deleteCat);

export default router;