import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Bienvenue sur Clara Bien-être !");
});

app.listen(3000);