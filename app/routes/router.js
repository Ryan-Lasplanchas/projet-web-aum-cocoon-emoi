import { Router } from "express";
import mainController from "../controllers/mainController.js";

const router = Router();

router.get("/", mainController.renderHomePage);

router.get("/prestations", mainController.renderPrestationsPage);

router.get("/a-propos", mainController.renderAboutPage);

router.get("/contact", mainController.renderContactPage);

export default router;