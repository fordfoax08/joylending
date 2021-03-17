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