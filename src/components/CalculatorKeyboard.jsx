import React from 'react'
import CalculatorItem from './CalculatorItem';

export default function CalculatorKeyboard({theme, stateTheme, operatorState, operandState, ...props}) {
  
  const keyboardItems = [7, 8, 9, 'DEL', 
                        4, 5, 6, '+', 
                        1, 2, 3, '-', 
                        '.', 0, '/', 'x', 
                        'RESET', '='];

  return (
    <div className="keyboard">

       {keyboardItems.map(item => {
        let bodyExtraClass = '';
        let itemExtraClass = '';
        if (item === 'DEL') {
            bodyExtraClass = 'keyboard__body--delete resetDelBtns'+theme+ ' rdeColor'+theme;
            itemExtraClass = 'keyboard__item--delete resetDelBtnsBack'+theme;
        } else if (item === 'RESET') {
            bodyExtraClass = 'keyboard__body--reset resetDelBtns'+theme+ ' rdeColor'+theme;
            itemExtraClass = 'keyboard__item--reset resetDelBtnsBack'+theme;
        } else if (item === '=') {
            bodyExtraClass = 'keyboard__body--equal equalBtn'+theme+ ' rdeColor'+theme;
            itemExtraClass = 'keyboard__item--equal equalBtnBack'+theme;
        }

        return (
            <CalculatorItem 
                bodyExtraClass = {bodyExtraClass}
                itemExtraClass = {itemExtraClass}
                value = {item}
                key = {item}
                theme = {theme}
                operatorState = {operatorState}
                operandState = {operandState}
            ></CalculatorItem>
        )
       }
       )}
    </div>
  )
}
