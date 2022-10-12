import React from 'react'


function BillInput({ bill, handleBillChange, error}) {
    console.log(error)
    return (
        <div className='input--container'>
            <div className='label--container'>
                <label htmlFor="bill-amount" className='input--label'>Bill</label>
                <label htmlFor='bill-amount' className='input--label--error'>{error}</label>
            </div>
            <div className='bill-input-container'>
                <img src='./assets/icon-dollar.svg' className="dollar-logo" alt="logo" />
                <input className="input-field" type="number" name="amount" id="bill-amount"
                    aria-label="bill-amount" placeholder={bill} value={bill} onChange={handleBillChange} min="0" />
            </div>
        </div>


    )
}

export default BillInput