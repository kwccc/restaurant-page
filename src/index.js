import { frontPage } from "./front";
import { menu } from "./menu";
import { about } from "./about";
// import restaurantImage from "./salle-restaurant-nuit.jpg";

const content = document.getElementById("content");
content.appendChild(frontPage);

const homeButton = document.getElementById("home");
homeButton.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(frontPage);
});

const menuButton = document.getElementById("menu");
menuButton.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(menu);
});

const aboutButton = document.getElementById("about");
aboutButton.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(about);
});

console.log("script is running");
