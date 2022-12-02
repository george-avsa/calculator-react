import { useEffect, useState } from "react";
import Calculator from "./components/Calculator";

function App() {

  const [theme, setTheme] = useState('Blue');
  const [memory, setMemory] = useState({
    
  });
  const [calculatorInput, setCalculatorInput] = useState(0);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    console.log(operands, operator)
  }, [operands, operator]);

  return (
    <div className={"wrapper background" + theme}>
      <Calculator
         theme = {theme}
         setTheme = {setTheme}
         operatorState = {[operator, setOperator]}
         operandState = {[calculatorInput, setCalculatorInput]}
          displayState =  {[display, setDisplay]}
         ></Calculator>
    </div>
  );
}

export default App;
