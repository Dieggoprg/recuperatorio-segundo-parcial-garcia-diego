import { Router } from "express";
import { createLanguage, updateLanguage, deleteLanguage, getLanguageById, getAllLanguage } from "../controllers/language.controllers.js";

export const router = Router();

router.post("/languages", createLanguage);
router.put("/languages/:id", updateLanguage);
router.delete("/languages/:id", deleteLanguage);
router.get("/languages/:id", getLanguageById);
router.get("/languages", getAllLanguage);