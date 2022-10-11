import React from 'react'

const normalStyle = {
  margin: "3px",
  width: "117px",
  height: "48px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#00474B",
  color: "#FFFFFF",
  fontSize: "24px",
  fontFamily: 'Space Mono'
}
const selectedStyle = {
  margin: "3px",
  width: "117px",
  height: "48px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#9FE8DF",
  color: "#00474B",
  fontSize: "24px",
  fontFamily: 'Space Mono'
}

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
function TipPercentCard({tip, handleTipChange }) {
  return (
    <div>
      <label className='input--label'>Select $Tip</label>
      <div className='tip--button--container'>
        {amounts.map((btn, index) => {
          return (
            <button
              type="button"
              className="tip--button"
              onClick={handleTipChange}
              value={btn.value}
              key={index}
              style={tip === btn.value ? selectedStyle : normalStyle}
            >{btn.value}%
            </button>)
        })}
        <input
          className="custom--button"
          type="number"
          placeholder='Custom'
          onChange={handleTipChange}
        />
      </div>
    </div>
  )
}

export default TipPercentCard