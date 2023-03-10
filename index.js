// document references
const linkCard = document.querySelector(".links");
const hoverButton = document.querySelector(".hover-button");
const triangle = document.querySelector(".uparrow");
const header = document.querySelector("header");

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
  header.appendChild(linkCard);
});

linkCard.addEventListener("mouseleave", () => {
  linkCard.className = "links-after";
  triangle.style.display = "none";
  header.removeChild(linkCard);
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
  "./Reading-glasses-desktop-1024x538.jpg",
  "./image2.jpg",
  "./image3.jpg",
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

const biggerImages = [
  "./animal1.jpg",
  "./animal2.jpg",
  "./animal3.jpg",
  "./animal4.jpg",
  "./animal5.jpg",
];
let currentImageBig = 0;

function nextBigImage() {
  currentImageBig++;
  if (currentImageBig >= biggerImages.length) {
    currentImageBig = 0;
  }
  document.getElementById("big-image-scroller").src =
    biggerImages[currentImageBig];
}
let imageInterval = setInterval(nextBigImage, 3000);

function nextIcon() {
  switch (biggerImages[currentImageBig]) {
    case biggerImages[0]:
      document.querySelector("#image1").src = "./checkbox-blank-circle.png";
      document.querySelector("#image2").src =
        "./checkbox-blank-circle-outline (1).png";
      document.querySelector("#image3").src =
        "./checkbox-blank-circle-outline (1).png";
      document.querySelector("#image4").src =
        "./checkbox-blank-circle-outline (1).png";
      document.querySelector("#image5").src =
        "./checkbox-blank-circle-outline (1).png";
      break;
    case biggerImages[1]:
      document.querySelector("#image1").src =
        "./checkbox-blank-circle-outline (1).png";
      document.querySelector("#image2").src = "./checkbox-blank-circle.png";
      document.querySelector("#image3").src =
        "./checkbox-blank-circle-outline (1).png";
      document.querySelector("#image4").src =
        "./checkbox-blank-circle-outline (1).png";
      document.querySelector("#image5").src =
        "./checkbox-blank-circle-outline (1).png";
      break;
    case biggerImages[2]:
      document.querySelector("#image1").src =
        "./checkbox-blank-circle-outline (1).png";
      document.querySelector("#image2").src =
        "./checkbox-blank-circle-outline (1).png";
      document.querySelector("#image3").src = "./checkbox-blank-circle.png";
      document.querySelector("#image4").src =
        "./checkbox-blank-circle-outline (1).png";
      document.querySelector("#image5").src =
        "./checkbox-blank-circle-outline (1).png";
      break;
    case biggerImages[3]:
      document.querySelector("#image1").src =
        "./checkbox-blank-circle-outline (1).png";
      document.querySelector("#image2").src =
        "./checkbox-blank-circle-outline (1).png";
      document.querySelector("#image3").src =
        "./checkbox-blank-circle-outline (1).png";
      document.querySelector("#image4").src = "./checkbox-blank-circle.png";
      document.querySelector("#image5").src =
        "./checkbox-blank-circle-outline (1).png";
      break;
    case biggerImages[4]:
      document.querySelector("#image1").src =
        "./checkbox-blank-circle-outline (1).png";
      document.querySelector("#image2").src =
        "./checkbox-blank-circle-outline (1).png";
      document.querySelector("#image3").src =
        "./checkbox-blank-circle-outline (1).png";
      document.querySelector("#image4").src =
        "./checkbox-blank-circle-outline (1).png";
      document.querySelector("#image5").src = "./checkbox-blank-circle.png";
  }
}
nextIcon();
let iconInterval = setInterval(nextIcon, 3000);

function iconEventListener() {
  document.addEventListener("click", (e) => {
    target = e.target;
    switch (target.id) {
      case "image1":
        document.getElementById("big-image-scroller").src = "./animal1.jpg";
        currentImageBig = 0;
        biggerImages[0];
        target.src = "./checkbox-blank-circle.png";
        document.querySelector("#image2").src =
          "./checkbox-blank-circle-outline (1).png";
        document.querySelector("#image3").src =
          "./checkbox-blank-circle-outline (1).png";
        document.querySelector("#image4").src =
          "./checkbox-blank-circle-outline (1).png";
        document.querySelector("#image5").src =
          "./checkbox-blank-circle-outline (1).png";
        clearInterval(imageInterval);
        imageInterval = setInterval(nextBigImage, 3000);
        clearInterval(iconInterval);
        iconInterval = setInterval(nextIcon, 3000);
        break;
      case "image2":
        document.getElementById("big-image-scroller").src = "./animal2.jpg";
        currentImageBig = 1;
        biggerImages[1];
        target.src = "./checkbox-blank-circle.png";
        document.querySelector("#image1").src =
          "./checkbox-blank-circle-outline (1).png";
        document.querySelector("#image3").src =
          "./checkbox-blank-circle-outline (1).png";
        document.querySelector("#image4").src =
          "./checkbox-blank-circle-outline (1).png";
        document.querySelector("#image5").src =
          "./checkbox-blank-circle-outline (1).png";
        clearInterval(imageInterval);
        imageInterval = setInterval(nextBigImage, 3000);
        clearInterval(iconInterval);
        iconInterval = setInterval(nextIcon, 3000);
        break;
      case "image3":
        document.getElementById("big-image-scroller").src = "./animal3.jpg";
        currentImageBig = 2;
        biggerImages[2];
        target.src = "./checkbox-blank-circle.png";
        document.querySelector("#image1").src =
          "./checkbox-blank-circle-outline (1).png";
        document.querySelector("#image2").src =
          "./checkbox-blank-circle-outline (1).png";
        document.querySelector("#image4").src =
          "./checkbox-blank-circle-outline (1).png";
        document.querySelector("#image5").src =
          "./checkbox-blank-circle-outline (1).png";
        clearInterval(imageInterval);
        imageInterval = setInterval(nextBigImage, 3000);
        clearInterval(iconInterval);
        iconInterval = setInterval(nextIcon, 3000);
        break;
      case "image4":
        document.getElementById("big-image-scroller").src = "./animal4.jpg";
        currentImageBig = 3;
        biggerImages[3];
        target.src = "./checkbox-blank-circle.png";
        document.querySelector("#image1").src =
          "./checkbox-blank-circle-outline (1).png";
        document.querySelector("#image2").src =
          "./checkbox-blank-circle-outline (1).png";
        document.querySelector("#image3").src =
          "./checkbox-blank-circle-outline (1).png";
        document.querySelector("#image5").src =
          "./checkbox-blank-circle-outline (1).png";
        clearInterval(imageInterval);
        imageInterval = setInterval(nextBigImage, 3000);
        clearInterval(iconInterval);
        iconInterval = setInterval(nextIcon, 3000);
        break;
      case "image5":
        document.getElementById("big-image-scroller").src = "./animal5.jpg";
        currentImageBig = 4;
        biggerImages[4];
        target.src = "./checkbox-blank-circle.png";
        document.querySelector("#image1").src =
          "./checkbox-blank-circle-outline (1).png";
        document.querySelector("#image2").src =
          "./checkbox-blank-circle-outline (1).png";
        document.querySelector("#image3").src =
          "./checkbox-blank-circle-outline (1).png";
        document.querySelector("#image4").src =
          "./checkbox-blank-circle-outline (1).png";
        clearInterval(imageInterval);
        imageInterval = setInterval(nextBigImage, 3000);
        clearInterval(iconInterval);
        iconInterval = setInterval(nextIcon, 3000);
    }
  });
}
iconEventListener();
