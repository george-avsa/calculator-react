import React from 'react'

export default function CalculatorDisplay({theme, stateTheme, ...props}) {
  return (
    <div className={"calculator__display displayBack" + theme + " displayColor" + theme}>
        0
    </div>
  )
}
