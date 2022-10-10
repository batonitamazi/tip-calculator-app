import React from 'react'
import BillInput from './controllers/BillInput'
import PeopleNumberCard from './controllers/PeopleNumberCard'
import TipPercentCard from './controllers/TipPercentCard'

function ControllersCard() {
  return (
    <div className='controller--container'>
      <BillInput />
      <TipPercentCard />
      <PeopleNumberCard />
    </div>
  )
}

export default ControllersCard