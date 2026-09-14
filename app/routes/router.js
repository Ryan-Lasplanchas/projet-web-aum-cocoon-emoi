import express from "express";
import renderHomePage from "../controllers/mainController.js";
import renderPrestationsPage from "../controllers/renderPrestationsPage.js";

const router = express.Router();

router.get("/", renderHomePage);
router.get("/prestations", renderPrestationsPage);

export default router;