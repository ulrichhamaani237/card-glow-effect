const glowingCards = document.querySelectorAll(".glow-section__card");
const glowSection = document.querySelector(".glow-section")

// il faut refresh pour voir le changement d'event mousemove
if (window.matchMedia("(pointer: fine)").matches) {
glowSection.addEventListener("mousemove", (e) => {
  glowingCards.forEach((card) => {
    const blob = card.querySelector(".glow-section__blob");
    const cardRect = card.getBoundingClientRect(); // Obtenir la position et dimensions de la carte

    blob.style.opacity = "1";

    // Calculer la position du blob par rapport à la carte


    // Les cartes bougent par rapport à leur position initiale
    // Donc elles ne sont pas au même endroit, ni sur le point de la souris
    // blob.style.transform = `translate(${e.clientX}px),${e.clientY}px)`;

    // Prise en compte du calcul par rapport à la position de la carte
    // Je fais donc la position de la souris - celle de la carte
    // Les blobs sont déjà un peu avancé vu qu'ils sont dans la carte, donc on enlève cette partie, ce qui nous donne l'endroit exact de la souris par rapport au point départ des blog
    // Mais il faut encore centrer les blobs dans la souris
    // blob.style.transform = `translate(${e.clientX - cardRect.left}px,${e.clientY - cardRect.top}px)`;


    // On tire de -50% -50%
    blob.style.transform = `translate(calc(${e.clientX - cardRect.left}px - 50%), calc(${e.clientY - cardRect.top}px - 50%))`;

    // mauvais
    // blob.style.top = e.clientX + "px"
    // blob.style.left = e.clientY + "px"
  });
});
}

