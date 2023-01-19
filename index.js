// document references
const linkCard = document.querySelector(".links");
const hoverButton = document.querySelector(".hover-button");
const triangle = document.querySelector(".uparrow");

const chevronOne = document.querySelector("#chevron1");
const chevronTwo = document.querySelector("#chevron2");
const chevronThree = document.querySelector("#chevron3");
const chevronFour = document.querySelector("#chevron4");
const chevronFive = document.querySelector("#chevron5");
const chevronSix = document.querySelector("#chevron6");

const health = document.querySelector("#health");
const education = document.querySelector("#education");
const international = document.querySelector("#international");
const energy = document.querySelector("#energy");
const environmental = document.querySelector("#environmental");
const social = document.querySelector("#social");

const allLinks = document.querySelectorAll("li");
const allChevrons = document.querySelectorAll(".chevron");

// display of the menu card
hoverButton.addEventListener("mouseenter", () => {
  linkCard.style.display = "flex";
  triangle.style.display = "block";
  linkCard.className = "links";
});

linkCard.addEventListener("mouseleave", () => {
  linkCard.className = "links-after";
  triangle.style.display = "none";
});

// function to underline the card and scale chevron
function underline() {
  this.style.textDecoration = "underline";
  switch (this.id) {
    case "health":
      chevronOne.style.scale = "1.09";
      break;
    case "education":
      chevronTwo.style.scale = "1.09";
      break;
    case "international":
      chevronThree.style.scale = "1.09";
      break;
    case "energy":
      chevronFour.style.scale = "1.09";
      break;
    case "environmental":
      chevronFive.style.scale = "1.09";
      break;
    case "social":
      chevronSix.style.scale = "1.09";
      break;
    default:
      return;
  }
}

// function to remove underline of card and descale chevron
function removeUnderline() {
  this.style.textDecoration = "none";
  switch (this.id) {
    case "health":
      chevronOne.style.scale = "1";
      break;
    case "education":
      chevronTwo.style.scale = "1";
      break;
    case "international":
      chevronThree.style.scale = "1";
      break;
    case "energy":
      chevronFour.style.scale = "1";
      break;
    case "environmental":
      chevronFive.style.scale = "1";
      break;
    case "social":
      chevronSix.style.scale = "1";
      break;
    default:
      return;
  }
}
// attaching functions to allLinks
allLinks.forEach((item) => {
  item.addEventListener("mouseenter", underline);
  item.addEventListener("mouseleave", removeUnderline);
});

// reverse of things: wrote the function within the event listener
allChevrons.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.scale = "1.09";

    switch (item.id) {
      case "chevron1":
        health.style.textDecoration = "underline";
        break;

      case "chevron2":
        education.style.textDecoration = "underline";
        break;

      case "chevron3":
        international.style.textDecoration = "underline";
        break;

      case "chevron4":
        energy.style.textDecoration = "underline";
        break;

      case "chevron5":
        environmental.style.textDecoration = "underline";
        break;

      case "chevron6":
        social.style.textDecoration = "underline";
        break;

      default:
        return;
    }
  });

  item.addEventListener("mouseleave", () => {
    item.style.scale = "1";

    switch (item.id) {
      case "chevron1":
        health.style.textDecoration = "none";
        break;

      case "chevron2":
        education.style.textDecoration = "none";
        break;

      case "chevron3":
        international.style.textDecoration = "none";
        break;

      case "chevron4":
        energy.style.textDecoration = "none";
        break;

      case "chevron5":
        environmental.style.textDecoration = "none";
        break;

      case "chevron6":
        social.style.textDecoration = "none";
        break;

      default:
        return;
    }
  });
});

const images = [
  "Reading-glasses-desktop-1024x538.jpg",
  "image2.jpg",
  "image3.jpg",
];
let currentImage = 0;

function nextImage() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }

  document.getElementById("team-image").src = images[currentImage];
}

setInterval(nextImage, 3000);
