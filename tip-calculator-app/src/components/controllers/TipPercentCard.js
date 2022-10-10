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
function TipPercentCard({tip, handleTipChange}) {
  return (
    <div>
      <label>Select $Tip</label>
      <div>
        {amounts.map((btn, index) => {
          return (<input type="button" onClick={handleTipChange} defaultValue={btn.value} key={index} />)
        })}
        <input type="number" placeholder='Custom' defaultValue="Custom" onChange={handleTipChange}/>
      </div>
    </div>
  )
}

export default TipPercentCard