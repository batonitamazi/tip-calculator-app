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
function TipPercentCard() {
  return (
    <div>
      <label>Select $Tip</label>
      <div>
        {amounts.map((btn, index) => {
          return (<input type="button" onClick={() => { console.log(btn.value) }} value={btn.value} key={index} />)
        })}
        <input type="number" placeholder='Custom'/>
      </div>
    </div>
  )
}

export default TipPercentCard