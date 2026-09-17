import prestations from "../models/prestation.js";

const mainController = {

    renderHomePage: (req, res) => {
        res.render("accueil", {
            nom: "Aum Cocoon Emoi",
            cathy: "Cathy"
        });
    },

    renderPrestationsPage: (req, res) => {
        res.render("prestations", {
            prestations
        });
    },

    renderAboutPage: (req, res) => {
        res.render("a-propos", {
            nom: "Aum Cocoon Emoi",
            cathy: "Cathy"
        });
    },

    renderContactPage: (req, res) => {
        res.render("contact", {
            nom: "Aum Cocoon Emoi",
            cathy: "Cathy"
        });
    }

};

export default mainController;