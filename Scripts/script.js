// fonction pour bouger la description de l'habitat quand on clique sur le menu burger
document.querySelector(".navbar-toggler").addEventListener('click', function () {
    if(window.innerWidth >= 431){ // condition pour ne pas ajouter la classe move-left si c'est un movil
        document.querySelector(".description").classList.toggle("move-left")
    }
})