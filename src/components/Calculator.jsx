import React, { useEffect, useState } from 'react'
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorHeader from "./CalculatorHeader";
import CalculatorKeyboard from "./CalculatorKeyboard";

export default function Calculator({
    theme, 
    setTheme, 
    operatorState, 
    operandState, 
    displayState, 
    resultState, 
    ...props
}) {

  return (
    <div className={"calculator keyboardBack" + theme}>
        <CalculatorHeader
            theme = {theme}
            stateTheme = {setTheme}
            ></CalculatorHeader>
        <CalculatorDisplay
            theme = {theme}
            stateTheme = {setTheme}
            operatorState = {operatorState}
            operandState = {operandState}
            ></CalculatorDisplay>
        <CalculatorKeyboard
            theme = {theme}
            stateTheme = {setTheme}
            operatorState = {operatorState}
            operandState = {operandState}
            resultState = {resultState}
            ></CalculatorKeyboard>
      </div>
  )
}
