import express from "express";
import router from "./app/routes/router.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "app/views");

app.get("/", (req, res) => {
    const nom = "Clara";
    const prestations = [
    {
        nom: "Massage relaxant",
        duree: 60,
        prix: 60
    },
    {
        nom: "Massage du dos",
        duree: 30,
        prix: 35
    }
    ];

    res.render("accueil", { nom, prestations });
});

app.listen(3000);