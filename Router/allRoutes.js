import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/accueil", "Accueil", "/pages/home.html"),
    new Route("/habitats", "Les Habitats", "/pages/vue_global_habitats.html"),
    new Route("/habitat_Savane", "La Savane", "/pages/Habitats/habitat_savane.html"),
    new Route("/habitat_Jungle", "La Jungle", "/pages/Habitats/habitat_jungle.html"),
    new Route("/habitat_Marais", "Habitat Marais", "/pages/Habitats/habitat_marais.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";