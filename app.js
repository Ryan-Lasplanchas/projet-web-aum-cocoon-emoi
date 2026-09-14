import express from "express";
import router from "./app/routes/router.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "app/views");

app.use(router);

app.listen(3000);