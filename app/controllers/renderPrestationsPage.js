import getAllPrestations from "../models/prestation.js";

const renderPrestationsPage = (req, res) => {
    const nom = "Clara";
    const prestations = await getAllPrestations();

    res.render("accueil", { nom, prestations });
};

export default renderPrestationsPage;