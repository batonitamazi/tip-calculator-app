import React from 'react'

function PeopleNumberCard({ people, handlePeopleChange }) {
  return (
    <div className='input--container'>
      <label htmlFor="people-amount" className='input--label'>Number of People</label>
      <div className='bill-input-container'>
        <img src='./assets/icon-person.svg' className="person-logo" alt="logo" />
        <input className="input-field" type="number" name="amount" id="people-amount"
          aria-label="people-amount" value={people} onChange={handlePeopleChange} />
      </div>
    </div>
  )
}

export default PeopleNumberCard