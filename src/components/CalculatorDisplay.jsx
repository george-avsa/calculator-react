import React, { useEffect, useState } from 'react'

export default function CalculatorDisplay({
  theme, 
  stateTheme, 
  operatorState,
  operandState,
  ...props
}) {
  const [calculatorValue, setCalculatorValue] = useState('0');
  const [minidisplay, setMinidisplay] = useState('');

  const [operator] = operatorState;
  const [operand] = operandState;

  useEffect(() => {
    if (operator.second) {
      setCalculatorValue(operator.second)
    } else if (operator.first) {
      setCalculatorValue(operator.first)
      setMinidisplay(`${operator.first}${operand}`)
    } else {
      setMinidisplay('')
      setCalculatorValue(0)
    }
  }, [operand, operator])

  return (
    <div className={"calculator__display displayBack" + theme + " displayColor" + theme}>
        <div className='calculator__operand'>
          {minidisplay}
        </div>
        {calculatorValue}
    </div>
  )
}
