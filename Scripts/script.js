// fonction pour bouger la description de l'habitat quand on clique sur le menu burger
document.querySelector(".navbar-toggler").addEventListener('click', function () {
    document.querySelector(".description").classList.toggle("move-left")
})