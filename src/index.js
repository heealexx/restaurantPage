import left from "./left.js";
import right from "./right.js";
import {home, contact, menu} from "./tabs.js";

function changeRightContent(event){
  const rightContent = document.querySelector("#rightContent");
  rightContent.removeChild(rightContent.children[0]);

  const funcName = event.target.textContent;
  var content;
  switch(funcName){
    case "Home":
      content = home();
      break;
    case "Contact":
      content = contact();
      break;
    case "Menu":
      content = menu();
      break;
  }
  rightContent.appendChild(content);
}

const content = document.querySelector("#content");

const leftContent = left();
const rightContent = right();

content.appendChild(leftContent);
content.appendChild(rightContent);

const buttons = document.querySelectorAll("button");
buttons.forEach(element => {
  element.addEventListener("click", changeRightContent);
});