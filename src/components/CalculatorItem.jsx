import React from 'react'

export default function CalculatorItem({bodyExtraClass, itemExtraClass, operatorState, operandState, theme, ...props}) {

  const [operator, setOperator] = operatorState;
  const [operand, setOperand] = operandState;

  function keyboardClick(e) {
    if (Number.isInteger(+e.target.innerText)) {
      setOperand(Number(e.target.innerText));
    } else {
      setOperator(e.target.innerText);
    }
  }

  return (
    <div className={'keyboard__item ' + itemExtraClass + ' keyboardItemsBack' + theme} onClick={keyboardClick}>
        <div className={'keyboard__body ' + bodyExtraClass + ' keyboardItems' + theme + ' keyboardItemsColor' +theme}>
            {props.value}
        </div>
    </div>
  )
}
