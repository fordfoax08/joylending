import {Client} from './module/client-module.js';
import {toggle} from './module/draw-module.js';

/* display Client Profile */
const modalContainer = document.querySelector(".modal-container");
const clientTb = document.querySelectorAll(".tb-client-name");
clientTb.forEach(e => {
    e.addEventListener("click", ()=>{
        const client = new Client("1124","Eren Ackerman");
        /* create modal body */
        let newDiv = document.createElement("DIV");
        /* add class to created modal body */
        newDiv.setAttribute("class","modal-body");
        /* insert data to created modal body */
        newDiv.innerHTML = client.profile();
        /* append node to modal container */
        modalContainer.appendChild(newDiv);
        toggle.openModal();
    });
});


/* CLOSE MODAL */
const modalBackground = document.querySelector(".modal-background");
const modalClose = document.querySelector(".modal-close");
modalClose.addEventListener("click", ()=>{
    toggle.closeModal();
    setTimeout(()=> modalClose.nextElementSibling.remove(),400);
})
/* modalBg close */
modalBackground.addEventListener("click",()=>{
    toggle.closeModal();
})