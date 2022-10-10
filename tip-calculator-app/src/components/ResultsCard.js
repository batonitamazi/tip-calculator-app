import React from 'react'

function ResultsCard({totalTip, totalPerson, handleReset}) {
  return (
    <div className='result--container'>
      <div className='calculation--container'>
        <div className='mini--container'>
          <div>
            <h6 className='amount--header'>Tip Amount</h6>
            <p className='person--span'>/ person</p>
          </div>
          <div className='value--container'>${totalTip}</div>
        </div>
        <div className='mini--container'>
          <div>
            <h6 className='amount--header'>Total</h6>
            <p className='person--span'>/ person</p>
          </div>
          <div className='value--container'>${totalPerson}</div>
        </div>
      </div>
      <button className='reset--button' onClick={handleReset}>RESET</button>

    </div>
  )
}

export default ResultsCard