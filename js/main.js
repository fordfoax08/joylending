import {Client} from './module/client-module.js';
import {toggle} from './module/draw-module.js';
import {ctx, monthChart, clientChart, graph2, graph3} from './module/chart-module.js';
import {clientUpdate} from './module/client-update-module.js';


document.addEventListener("DOMContentLoaded", ()=>{
    graph2();
    graph3();
});


/* display Client Profile */
const modalContainer = document.querySelector(".modal-container");
const clientTb = document.querySelectorAll(".tb-client-name");
clientTb.forEach(e => {
    e.addEventListener("click", ()=>{
        /* display user */
        userInfoDisplay();
    });
});

/* User Info display */
function userInfoDisplay(id=123,name="Kassy Vi"){
    const client = new Client(id,name);
    /* create modal body */
    let newDiv = document.createElement("DIV");
    /* add class to created modal body */
    newDiv.setAttribute("class","modal-body");
    /* insert data to created modal body */
    newDiv.innerHTML = client.profile();
    /* append node to modal container */
    modalContainer.appendChild(newDiv);
    toggle.openModal();
    clientChart();
    clientUpdate(client,clientChart);
}



/* CLOSE MODAL */
const modalBackground = document.querySelector(".modal-background");
const modalClose = document.querySelector(".modal-close");
modalClose.addEventListener("click", ()=>{
    toggle.closeModal();
})
/* modalBg close */
modalBackground.addEventListener("click",(e)=>{
    if(!e.target.classList.contains("modal-background")){
        return;
    }
    toggle.closeModal();
    //console.log(e.target)
});

