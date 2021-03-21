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


/* ++++++++++++++CHART DATA */

/* var ctx = document.getElementById('monthChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}); */