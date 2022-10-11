import React from 'react'
import BillInput from './controllers/BillInput'
import PeopleNumberCard from './controllers/PeopleNumberCard'
import TipPercentCard from './controllers/TipPercentCard'

function ControllersCard({bill, handleBillChange, tip, handleTipChange, people, handlePeopleChange}) {
  return (
    <div className='controller--container'>
      <BillInput bill={bill} handleBillChange={handleBillChange}/>
      <TipPercentCard tip={tip} handleTipChange={handleTipChange}/>
      <PeopleNumberCard people={people} handlePeopleChange={handlePeopleChange}/>
    </div>
  )
}

export default ControllersCard