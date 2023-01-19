const linkCard = document.querySelector(".links");
const hoverButton = document.querySelector(".hover-button");

hoverButton.addEventListener("mouseenter", () => {
  linkCard.style.display = "flex";
  linkCard.className = "links";
});

linkCard.addEventListener("mouseleave", () => {
  linkCard.className = "links-after";
});
