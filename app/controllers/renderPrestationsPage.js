const renderHomePage = (req, res) => {
    res.render("accueil", { nom, prestations });
};

export default renderHomePage;