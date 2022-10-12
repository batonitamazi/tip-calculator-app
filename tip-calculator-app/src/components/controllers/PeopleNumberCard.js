import React from 'react'

function PeopleNumberCard({ people, handlePeopleChange, error }) {
  return (
    <div className='input--container'>
      <div className='label--container'>
        <label htmlFor="people-amount" className='input--label'>Number of People</label>
        <label htmlFor='people-amount' className='input--label--error'>{error}</label>
      </div>
      <div className='bill-input-container'>
        <img src='./assets/icon-person.svg' className="person-logo" alt="logo" />
        <input className="input-field" type="number" name="amount" id="people-amount"
          aria-label="people-amount" value={people} placeholder="0" onChange={handlePeopleChange} min="0" />
      </div>
    </div>
  )
}

export default PeopleNumberCard