import React from 'react'
import CalculatorSwitcher from './CalculatorSwitcher'

export default function CalculatorHeader({theme, stateTheme, ...props}) {
  return (
    <div className="header">
        <p className={"header_logo displayColor" + theme}>calc</p>
        <div className="theme-switcher">
          <h1 className={"theme-switcher__title displayColor" + theme}>THEME</h1>
          <div className="theme-switcher__body">
            <div className="theme-switcher__navi">
              <p className={"displayColor" + theme}>1</p>
              <p className={"displayColor" + theme}>2</p>
              <p className={"displayColor" + theme}>3</p>
            </div>
            <CalculatorSwitcher
              stateTheme = {[theme, stateTheme]}
              ></CalculatorSwitcher>
          </div>
        </div>
      </div>
  )
}