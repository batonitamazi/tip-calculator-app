import React from 'react'

function PeopleNumberCard({people, handlePeopleChange}) {
  return (
    <div>
            <label htmlFor="people-amount">people</label>
            <div>
                <input className="input-field" type="number" name="amount" id="people-amount"
                    aria-label="people-amount" defaultValue={people} onChange={handlePeopleChange}/>
            </div>
        </div>
  )
}

export default PeopleNumberCard