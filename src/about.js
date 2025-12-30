import noel from "./noel-edmonds.jpg";

const heading = document.createElement("h1");
heading.textContent = "About";

const description = document.createElement("p");
description.textContent =
  "The Fat Pig was opened back in 2010 by legendary chef Noel Edmonds to herald the new age of fantastic cuisine and innovative cooking to delight your tastebuds.";

const noelPic = document.createElement("img");
noelPic.src = noel;

export const about = document.createElement("div");
about.appendChild(heading)
about.appendChild(description);
about.appendChild(noelPic);
