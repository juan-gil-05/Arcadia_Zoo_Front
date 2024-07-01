// fonction pour bouger la description de l'habitat quand on clique sur le menu burger
document.querySelector(".navbar-toggler").addEventListener('click', function () {
    document.querySelector(".savane-description").classList.toggle("move-left")
})