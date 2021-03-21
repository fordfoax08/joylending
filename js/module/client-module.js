class Client{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    profile(){
        return `
            <div class="client-info-container">
                <div class="info1">
                    <div class="info-profile-details">
                        <div class="profile-pic">
                            <img src="https://placekitten.com/360/360" alt="profile pic">
                        </div>
                        <div class="profile-name">
                            <h2>Juan Dela Cruz</h2>
                            <h4>Blk 1 Lot 109 Sub division Rodriguez Rizal</h4>
                            <h5>0935823498</h5>
                            <h5>https://www.facebook.com/profile</h5>
                        </div>
                    </div>
                    <div class="info-credit-details">
                        <table class="credit-table">
                            <tbody>
                                <tr>
                                    <td>Loan Ammount:</td>
                                    <td id="loanAmmount"><span class="client-peso-sign">&#8369;</span>100,000</td>
                                </tr>
                                <tr>
                                    <td>Days:</td>
                                    <td>60</td>
                                </tr>
                                <tr>
                                    <td>Interest:</td>
                                    <td>10<span>&percnt;</span></td>
                                </tr>
                                <tr>
                                    <td>Daily:</td>
                                    <td id="loanDaily"><span class="client-peso-sign">&#8369;</span>1,850</td>
                                </tr>
                                <tr>
                                    <td>Remaining Balance:</td>
                                    <td id="loanRemain"><span class="client-peso-sign">&#8369;</span>60,000</td>
                                </tr>
                                <tr>
                                    <td>Total Recieved:</td>
                                    <td id="totalReceived"><span class="client-peso-sign">&#8369;</span>45,000</td>
                                </tr>
                                <tr>
                                    <td>Total Recievable:</td>
                                    <td id="totalReceivable"><span class="client-peso-sign">&#8369;</span> 110,000</td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- BUTTONS for entry -->
                        <input type="button" class="update-client-credit" value="Update">
                    </div>
                </div>
                <!-- Chart -->
                <div class="info2">
                    <div class="chart1">
                        <p>Expected payment</p>
                        <canvas id="chart1" width="400" height="120"></canvas>
                    </div>
                    <div class="chart2">
                        Payment Deviation daily
                        <canvas id="chart2" width="400" height="120"></canvas>
                    </div>
                    <div class="chart3">
                        <p>Payment Consistency</p>
                        <canvas id="chart3" width="400" height="120"></canvas>
                    </div>
                </div>
            </div>
        `;
    }
}



export {Client};