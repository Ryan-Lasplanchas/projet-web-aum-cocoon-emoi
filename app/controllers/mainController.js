import prestations from "../models/prestation.js";

const renderHomePage = (req, res) => {
    const nom = "Clara";

    res.render("accueil", { nom, prestations });
};

export default renderHomePage;