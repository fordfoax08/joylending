import {Client,ClientDisplay,enableCheck} from './module/modules-client.js';
import {toggle} from './module/draw-module.js';
import {clientChart, graph2, graph3} from './module/chart-module.js';


document.addEventListener("DOMContentLoaded", ()=>{
    graph2();
    graph3();
    /* enable checkbox to edit manually */
    enableCheck();
});


/* display Client Profile */
const modalContainer = document.querySelector(".modal-container");
const clientTb = document.querySelectorAll(".tb-client-name");
clientTb.forEach(e => {
    e.addEventListener("click", ()=>{
        /* display user 
         userInfoDisplay shoud accept arguments id and name(atleast)
        */
        userInfoDisplay();
    });
});

/* User Info display */
function userInfoDisplay(id=123,name="Kassy Vi"){
    const clientDisplay = new ClientDisplay;
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
    /* Client update modal display */
    clientDisplay.clientUpdate(client,clientChart);
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

