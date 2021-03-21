import {Client} from './module/client-module.js';
import {toggle} from './module/draw-module.js';
import {ctx, monthChart, clientChart} from './module/chart-module.js';
import {clientUpdate} from './module/client-update-module.js';



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
        clientChart();
        clientUpdate();
    });
});


/* CLOSE MODAL */
const modalBackground = document.querySelector(".modal-background");
const modalClose = document.querySelector(".modal-close");
modalClose.addEventListener("click", ()=>{
    toggle.closeModal();
    //setTimeout(()=> modalClose.nextElementSibling.remove(),400);
})
/* modalBg close */
modalBackground.addEventListener("click",(e)=>{
    if(!e.target.classList.contains("modal-background")){
        return;
    }
    toggle.closeModal();
    //console.log(e.target)
});


/* init client chart module */
/* function clientChart(){
    import {ctx1,ctx2,ctx3,chart1,chart2,chart3} from './module/client-chart-module.js';
    
} */