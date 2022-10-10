import React, { useState } from 'react'


function BillInput() {
    const [value, setValue] = useState(0)
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div>
            <label htmlFor="bill-amount">Bill</label>
            <div>
                <input className="input-field" type="number" name="amount" id="bill-amount"
                    aria-label="bill-amount" />
            </div>
        </div>


    )
}

export default BillInput