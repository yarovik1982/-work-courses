// import { removeClass } from "./modules/removeClass.js";

import { useAccordeon } from "./modules/useAccordeon.js";
console.log(window.innerWidth);
useAccordeon()


function main(elem) {
   let widthDevise;
 
   function updateWidth() {
     const info = document.querySelector(elem);
     info.innerHTML = "";
 
     widthDevise = window.innerWidth;
     info.innerHTML = widthDevise;
   }
 
   window.addEventListener("resize", updateWidth);
 
   updateWidth();
 }
 main('.info')