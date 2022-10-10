import React from 'react'

function ResultsCard() {
  return (
    <div className='result--container'>
      <div className='calculation--container'>
        <div className='mini--container'>
          <div>
            <h6>Tip Amount</h6>
            <p>/ person</p>
          </div>
          <div>$4.27</div>
        </div>
        <div className='mini--container'>
          <div>
            <h6>Tip Amount</h6>
            <p>/ person</p>
          </div>
          <div>$4.27</div>
        </div>
      </div>
      <button className='reset--button'>RESET</button>

    </div>
  )
}

export default ResultsCard