import {home} from "./tabs";

function header(){
  const header = document.createElement("div");
  header.id = "header";
  header.textContent = "Chipotle Connesours Club";

  const homeButton = document.createElement("button");
  const contactButton = document.createElement("button");
  const menuButton = document.createElement("button");

  homeButton.textContent = "Home";
  contactButton.textContent = "Contact";
  menuButton.textContent = "Menu";

  header.append(homeButton, contactButton, menuButton);

  return header;
}

export default function right(){
  const right = document.createElement("div");
  right.id = "right";

  right.append(header());

  const rightContent = document.createElement("div");
  rightContent.id = "rightContent";
  rightContent.append(home());
  right.append(rightContent);

  return right;
}