import React from 'react'

function PeopleNumberCard() {
  return (
    <div>
            <label htmlFor="people-amount">Number of People</label>
            <div>
                <input className="input-field" type="number" name="amount" id="people-amount"
                    aria-label="people-amount" />
            </div>
        </div>
  )
}

export default PeopleNumberCard