import React, { useState } from 'react'
import './index.css'
function AgeCalculator () {
  const [onEnteredAge, setonEnteredAge] = useState()
  const [showError, setShowError] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [calculatedAge, setCalculatedAge] = useState(0)

  const getCalculatedAge = () => {
    const dateOfBirth = new Date(onEnteredAge)
    const dateOfBirthYear = dateOfBirth.getFullYear()
    const presentDate = new Date()
    const presentDateYear = presentDate.getFullYear()
    return presentDateYear - dateOfBirthYear
  }
  
  const onClickCalculate = () => {
    const age = getCalculatedAge()
    if (age > 0 && onEnteredAge.length <= 4 && Number.isInteger(age)) {
      setShowError(false)
      setShowResult(true)
      setCalculatedAge(age)
    } else {
      setShowError(true)
      setShowResult(false)
    }
  }
  return (
    <div>
      <div>
        <div className='card-container'>
          <h1 className='heading'>Age Calculator</h1>
          <input
            className='input-box'
            onChange={e => setonEnteredAge(e.target.value)}
            placeholder='Enter the year that you are born'
            type='text'
            value={onEnteredAge}
          />
          {showError ? (
            <p className='error-msg'>Enter the year that you are Born</p>
          ) : null}
          {showResult ? (
            <p className='results-msg'>{`You are ${calculatedAge} year old by the end of ${new Date().getFullYear()}`}</p>
          ) : null}
          <div>
            <button className='button' onClick={onClickCalculate} type='button'>
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgeCalculator
