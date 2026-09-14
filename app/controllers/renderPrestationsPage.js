const renderPrestationsPage = (req, res) => {
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

    res.render("prestations", { nom, prestations });
};

export default renderPrestationsPage;