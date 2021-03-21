function clientUpdate(){
    const modalBody = document.querySelector('.modal-body');
    const clientUpdateBtn = document.querySelector('.update-client-credit');
    clientUpdateBtn.addEventListener("click",()=>{
        modalBody.innerHTML = "";
        /* create new div */
        let creditInf = document.createElement('DIV');
        creditInf.setAttribute("class","credit-info");
        creditInf.innerHTML = `
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
        modalBody.appendChild(creditInf);

        /* UPDATE CHECKBOXES */
    })

}

export {clientUpdate};