import React, { useState, useEffect } from 'react'
import ControllersCard from './ControllersCard'
import ResultsCard from './ResultsCard'

function CalculationCard() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [totalTip, setTotalTip] = useState(0);
  const [totalPerson, setTotalPerson] = useState(0);
  const [active, setActive] = useState(false)
  const [error, setError] = useState("");
  const handleBillChange = (e) => {
    setBill(Number(e.target.value))
    setActive(true)
    
  }
  const handleTipChange = (e) => {
    setTip(Number(e.target.value))
    setActive(true)
  }
  const handlePeopeChange = (e) => {
    setPeople(Number(e.target.value))
      setActive(true)
  }
  const handleReset = () => {
    setBill(0)
    setTip(0)
    setPeople(0)
    setTotalPerson(0)
    setTotalTip(0)
    setActive(false)
  }
  useEffect(() => {
    if (bill > 0 && tip > 0 && people > 0) {
      setTotalTip((bill * (tip / 100)) / people)
      setTotalPerson(bill / people + ((bill * (tip / 100)) / people))
    }
  }, [bill, tip, people, totalTip, totalPerson])
  return (
    <div className='calculation--card'>
      <ControllersCard
        bill={bill}
        error={error}
        tip={tip}
        handleBillChange={handleBillChange}
        handleTipChange={handleTipChange}
        people={people}
        handlePeopleChange={handlePeopeChange}
      />
      <ResultsCard totalTip={totalTip} totalPerson={totalPerson} handleReset={handleReset} active={active} />
    </div>
  )
}

export default CalculationCard