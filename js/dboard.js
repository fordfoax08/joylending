/* Left Panel Drawer ANim */
const lpanel = document.querySelector('.l-panel-container');
const logoBtn = document.querySelector(".comp-logo");
logoBtn.addEventListener("click", drawPanel);

function drawPanel(e){
    if(lpanel.classList.contains("on")){
        lpanel.classList.remove("on");
    }else{
        lpanel.classList.add("on");
    }
}


/* Table Checkbox anim */
const tableCheckBox = document.querySelectorAll(".tbody1 tr td input");
tableCheckBox.forEach(e => {
    e.addEventListener("click",() => {
        if(e.checked){
            if(event.ctrlKey && !event.shiftKey && !event.altKey){
                e.parentNode.style.backgroundColor = "rgb(93, 187, 93)";
            }else if(event.altKey && !event.shiftKey && !event.ctrlKey){
                e.parentNode.style.backgroundColor = "rgb(250, 158, 158)";
            }else{
                e.checked = false;
            }
        }else{
            if(event.ctrlKey && event.shiftKey){
                e.parentNode.removeAttribute("style");
            }else{
                e.checked = true;
            }
        }
    })
});

