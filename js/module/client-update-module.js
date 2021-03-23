//accept User ID
function clientUpdate(client,chart){
    const modalBody = document.querySelector('.modal-body');
    const clientUpdateBtn = document.querySelector('.update-client-credit');
    clientUpdateBtn.addEventListener("click",()=>{
        modalBody.innerHTML = "";
        /* create new div */
        let creditInf = document.createElement('DIV');
        creditInf.setAttribute("class","credit-info");
        creditInf.innerHTML = clientData();
        modalBody.appendChild(creditInf);
        /* when back btn is clicked, user info will be updated
        chart here is passed as parameter
        */
        backBtnUpdate(client,chart);
        /* UPDATE CHECKBOXES */
    })
}

function clientData(){
    const data = `
            <button class="credit-info-back">&lt; Back</button>
            <h2>Juan Dela Cruz</h2>
            <h5>B1 lot 1 ph1 kasiglahan village</h5>
            <p>Daily:<span> 1800</span></p>
            <div class="credit-update-table">
                <table class="credit-table2">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Ammount</th>
                            <th>Regular</th>
                            <th>Partial</th>
                            <th>Late</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><span>&#8369;</span><input type="text" class="ammount-pay" value="100"></td>
                            <td><input type="checkbox" class="reg-pay"></td>
                            <td><input type="checkbox" class="part-pay"></td>
                            <td><input type="checkbox" class="late-pay"></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><span>&#8369;</span><input type="text" class="ammount-pay" value="100"></td>
                            <td><input type="checkbox" class="reg-pay"></td>
                            <td><input type="checkbox" class="part-pay"></td>
                            <td><input type="checkbox" class="late-pay"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- End of Table  -->
            <div class="update-buttons">
                <button class="update-btn">Update</button>
            </div>
            <!-- end of update buttons -->
        `;
        return data;
}


/* Back button in Update section */
function backBtnUpdate(data,chart){
    const backBtn = document.querySelector(".credit-info-back");
    backBtn.addEventListener("click", ()=>{
        //console.log(data.profile());
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = "";
        modalBody.innerHTML = data.profile();
        /* chart parameter invoked from main.js from module */
        chart();
        /* enable update button by calling clientData 
        note data will refresh if modal is closed*/
        clientUpdate(data,chart);
    })
}

export {clientUpdate};