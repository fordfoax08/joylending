import {toggle} from './draw-module.js';

function enableCheckboxUpdate(){
    const checkBoxes = document.querySelectorAll('.check-box-pay');
    checkBoxes.forEach(e => {
        e.addEventListener('dblclick',()=>{
            // console.log(e);
            modalBody();
            toggle.openModal();
            updateData();
        });
    });
}

/* modal body for checkbox / update manually */
function modalBody(){
    /* select modalContainer to insert created div */
    const modalContainer = document.querySelector('.modal-container');

    let newDiv = document.createElement('DIV');
    newDiv.setAttribute("class","modal-body");
    newDiv.innerHTML = modalData();
    modalContainer.appendChild(newDiv);
}

/* This function will be called inside modalBody */
function modalData(){
    return `
        <div class="checkbox-update">
            <h4>Joshua Arevalo</h4><hr />
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Regular</th>
                        <th>Partial</th>
                        <th>Late</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>4-1-2021</td>
                        <td><input type="text" name="text1" value="2019" id="updateData"></td>
                        <td><input type="checkbox"></td>
                        <td><input type="checkbox" checked></td>
                        <td><input type="checkbox"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

/* ++++UPDATE AMMOUNT Enter */
function updateData(){
    const updateTxt = document.querySelector('#updateData');
    updateTxt.addEventListener('keypress',(e)=>{
        if(e.key === "Enter" || e.keyCode == 13){
            if(!confirm("Are you sure?")) return;
            console.log('Data Updated!');
        }
    });
}




export{enableCheckboxUpdate};