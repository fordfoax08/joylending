function enableCheckboxUpdate(){
    const checkBoxes = document.querySelectorAll('.check-box-pay');
    checkBoxes.forEach(e => {
        e.addEventListener('dblclick',()=>{
            console.log("clicked!");
        });
    });
}


export{enableCheckboxUpdate};