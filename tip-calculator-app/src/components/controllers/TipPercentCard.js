import React from 'react'



const amounts = [
  {
    value: 5,
  },
  {
    value: 10,
  },
  {
    value: 15,
  },
  {
    value: 25,
  },
  {
    value: 50,
  },

]
function TipPercentCard({handleTipChange}) {
  return (
    <div>
      <label className='input--label'>Select $Tip</label>
      <div>
        {amounts.map((btn, index) => {
          return (<button type="button" className="tip--button" onClick={handleTipChange} value={btn.value} key={index}>{btn.value}%</button>)
        })}
        <input className="custom--button" type="number" placeholder='Custom' defaultValue="Custom" onChange={handleTipChange}/>
      </div>
    </div>
  )
}

export default TipPercentCard