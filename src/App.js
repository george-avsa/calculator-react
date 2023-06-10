import { useEffect, useState } from "react";
import Calculator from "./components/Calculator";

function App() {

  const [theme, setTheme] = useState('Blue');
  
  const [calculatorInput, setCalculatorInput] = useState();
  const [display, setDisplay] = useState('0');

  const [operator, setOperator] = useState({
    first: '',
    second: '',
  });

  const [result, setResult] = useState('');

  return (
    <div className={"wrapper background" + theme}>
      <Calculator
         theme = {theme}
         setTheme = {setTheme}
         operatorState = {[operator, setOperator]}
         operandState = {[calculatorInput, setCalculatorInput]}
         displayState =  {[display, setDisplay]}
         resultState = {[result, setResult]}
         ></Calculator>
    </div>
  );
}

export default App;
