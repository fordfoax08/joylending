const modalBg = document.querySelector(".modal-background");
const modalCon = document.querySelector(".modal-container");

const toggle = {
    openModal : () => {
        modalBg.classList.add("open");
        setTimeout(()=> modalCon.classList.add("open"),300);
    },
    closeModal : () => {
        modalCon.classList.remove("open");
        setTimeout(()=> {
            modalBg.classList.remove("open")
        },400);
        
    }
}

export {toggle};