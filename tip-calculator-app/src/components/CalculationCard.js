import React, { useState, useEffect } from 'react'
import ControllersCard from './ControllersCard'
import ResultsCard from './ResultsCard'

function CalculationCard() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [totalTip, setTotalTip] = useState(0);
  const [totalPerson, setTotalPerson] = useState(0);
  const handleBillChange = (e) => {
    setBill(e.target.value)
  }
  const handleTipChange = (e) => {
    setTip(Number(e.target.value))
  }
  const handlePeopeChange = (e) => {
    setPeople(e.target.value)
  }
  const handleReset = () => {
    setBill(0)
    setTip(0)
    setPeople(0)
    setTotalPerson(0)
    setTotalTip(0)
  }
  useEffect(() => {
    if (bill > 0 && tip > 0 && people > 0) {
      setTotalTip((bill * (tip / 100)) / people)
      setTotalPerson(bill / people + ((bill * (tip / 100)) / people))
    }

  }, [bill, tip, people, totalTip, totalPerson])


  console.log(totalTip)
  return (
    <div className='calculation--card'>
      <ControllersCard
        billValue={bill}
        handleBillChange={handleBillChange}
        tip={tip}
        handleTipChange={handleTipChange}
        people={people}
        handlePeopleChange={handlePeopeChange}
      />
      <ResultsCard totalTip={totalTip} totalPerson={totalPerson} handleReset={handleReset} />
    </div>
  )
}

export default CalculationCard