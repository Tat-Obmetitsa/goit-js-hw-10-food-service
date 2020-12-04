import menuTemplate from "../templates/menu-template.hbs";
import menuItems from "../menu.json";

const menuTemplateCode = menuTemplate(menuItems);
const templateRef = document.querySelector(".js-menu");

templateRef.insertAdjacentHTML("beforeend", menuTemplateCode);
