import express from "express";
import router from "./app/routes/router.js";
import "dotenv/config";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});