import React from 'react'
import { keyboardClick } from '../logic/calculatorLogic';

export default function CalculatorItem({
  bodyExtraClass, 
  itemExtraClass, 
  operatorState, 
  operandState, 
  theme, 
  resultState,
  ...props
}) {
  
  return (
    <div 
      className={'keyboard__item ' + itemExtraClass + ' keyboardItemsBack' + theme} 
      onClick={(e) => keyboardClick(e, operatorState, operandState, resultState)}
    >
        <div className={'keyboard__body ' + bodyExtraClass + ' keyboardItems' + theme + ' keyboardItemsColor' +theme}>
            {props.value}
        </div>
    </div>
  )
}
