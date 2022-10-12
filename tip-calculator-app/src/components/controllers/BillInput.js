import React from 'react'


function BillInput({ bill, handleBillChange }) {
    return (
        <div className='input--container'>
            <label htmlFor="bill-amount" className='input--label'>Bill</label>
            <div className='bill-input-container'>
                <img src='./assets/icon-dollar.svg' className="dollar-logo" alt="logo" />
                <input className="input-field" type="number" name="amount" id="bill-amount"
                    aria-label="bill-amount" value={bill} placeholder="0"  onChange={handleBillChange} min="0" />
            </div>
        </div>


    )
}

export default BillInput