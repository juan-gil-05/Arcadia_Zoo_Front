import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/accueil", "Accueil", "/pages/home.html"),
    new Route("/habitats", "Les Habitats", "/pages/vue_global_habitats.html"),
    new Route("/habitats-savane", "La Savane", "/pages/Habitats/habitat_savane.html"),
    new Route("/habitats-jungle", "La Jungle", "/pages/Habitats/habitat_jungle.html"),
    new Route("/habitats-marais", "Habitat Marais", "/pages/Habitats/habitat_marais.html"),
    new Route("/habitats-foret", "Habitat Forêt", "/pages/Habitats/habitat_foret.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";