import React from 'react'

function PeopleNumberCard({people, handlePeopleChange}) {
  return (
    <div>
            <label htmlFor="people-amount" className='input--label'>people</label>
            <div>
                <input className="input-field" type="number" name="amount" id="people-amount"
                    aria-label="people-amount" value={people} onChange={handlePeopleChange}/>
            </div>
        </div>
  )
}

export default PeopleNumberCard