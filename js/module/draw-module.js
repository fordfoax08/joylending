const modalBg = document.querySelector(".modal-background");
const modalCon = document.querySelector(".modal-container");

const toggle = {
    openModal : () => {
        modalBg.classList.add("open");
        setTimeout(()=> modalCon.classList.add("open"),300);
    },
    closeModal : () => {
        modalCon.classList.remove("open");
        document.querySelector(".modal-body").remove()
        modalBg.classList.remove("open")
        
        
    }
}

export {toggle};