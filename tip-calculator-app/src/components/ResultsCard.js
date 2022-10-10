import React from 'react'

function ResultsCard({totalTip, totalPerson, handleReset}) {
  return (
    <div className='result--container'>
      <div className='calculation--container'>
        <div className='mini--container'>
          <div>
            <h6>Tip Amount</h6>
            <p>/ person</p>
          </div>
          <div>${totalTip}</div>
        </div>
        <div className='mini--container'>
          <div>
            <h6>Total</h6>
            <p>/ person</p>
          </div>
          <div>${totalPerson}</div>
        </div>
      </div>
      <button className='reset--button' onClick={handleReset}>RESET</button>

    </div>
  )
}

export default ResultsCard