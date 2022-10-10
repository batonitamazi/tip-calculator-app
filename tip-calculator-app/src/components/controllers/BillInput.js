import React from 'react'


function BillInput({bill, handleBillChange}) {
    return (
        <div>
            <label htmlFor="bill-amount">Bill</label>
            <div>
                <input className="input-field" type="number" name="amount" id="bill-amount"
                    aria-label="bill-amount" value={bill} onChange={handleBillChange}/>
            </div>
        </div>


    )
}

export default BillInput