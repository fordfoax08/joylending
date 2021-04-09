/* Left Panel Drawer ANim */
const lpanel = document.querySelector('.l-panel-container');


/* Draw L panel when hover */
const lPanelItems = document.querySelectorAll(".l-panel-container > div");
lPanelItems.forEach(e => {
    e.addEventListener("mouseenter", ()=>{
        lpanel.classList.add("on");
    });
});
lPanelItems.forEach(e => {
    e.addEventListener("mouseleave", ()=>{
        lpanel.classList.remove("on");
    })
});


/* Table Checkbox anim */
const tableCheckBox = document.querySelectorAll(".tbody1 tr td input[type=checkbox]");
tableCheckBox.forEach(e => {
    e.addEventListener("click",() => {
        if(e.checked){
            if(event.ctrlKey && !event.shiftKey && !event.altKey){
                e.parentNode.style.backgroundColor = "rgb(93, 187, 93)";
            }else if(event.altKey && !event.shiftKey && !event.ctrlKey){
                e.parentNode.style.backgroundColor = "rgb(243, 72, 72)";
            }else if(event.shiftKey && !event.ctrlKey && !event.altKey){
                e.parentNode.style.backgroundColor = "rgb(250, 158, 158)";
            }else{
                e.checked = false;
            }
        }else{
            if(event.ctrlKey && event.shiftKey){
                if(confirm("Are you sure you wan't to remove?")){
                    e.parentNode.removeAttribute("style");
                }else{
                    e.checked = true;
                }
            }else{
                e.checked = true;
            }
        }
    })
});

/* Show Amount in CELL */
tableCheckBox.forEach(e => {
    e.addEventListener("dblclick", ()=>{
        const ammountTxt = e.parentNode.firstElementChild;
        if(ammountTxt.classList.contains("show")){
            ammountTxt.classList.remove("show");
        }else{
            ammountTxt.classList.add("show");
        }
    });
});





/* HELP SECTION */
const icoHelp = document.querySelector(".ico-help");
icoHelp.addEventListener("click",() => {
    const helpPanel = document.querySelector(".help-container");
    if(helpPanel.classList.contains("open")){
        helpPanel.classList.remove("open");
    }else{
        helpPanel.classList.add("open");
    }
})

/* FOR RIGHT PANEL ANIMATION */
const notifyBtn = document.querySelector(".notify");
const rPanel = document.querySelector(".r-panel-container");
notifyBtn.addEventListener("click",()=>{
    if(rPanel.classList.contains("open")){
        rPanel.classList.remove("open");
    }else{
        rPanel.classList.add("open");
    }
});
