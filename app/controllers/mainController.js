import prestations from "../models/prestation.js";

const mainController = {

    renderHomePage: (req, res) => {
        res.render("accueil", {
            title: "Accueil - Aum Cocoon Emoi",
            nom: "Aum Cocoon Emoi",
            cathy: "Cathy",
            prestations
        });
    },

    renderPrestationsPage: (req, res) => {
        res.render("prestations", {
            title: "Prestations - Aum Cocoon Emoi",
            prestations
        });
    },

    renderAboutPage: (req, res) => {
        res.render("a-propos", {
            title: "À propos - Aum Cocoon Emoi",
            nom: "Aum Cocoon Emoi",
            cathy: "Cathy"
        });
    },

    renderContactPage: (req, res) => {
        res.render("contact", {
            title: "Contact - Aum Cocoon Emoi",
            nom: "Aum Cocoon Emoi",
            cathy: "Cathy"
        });
    }

};

export default mainController;