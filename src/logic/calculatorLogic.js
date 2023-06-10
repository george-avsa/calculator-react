export function keyboardClick(e, operatorState, operandState, resultState) {
    const [operator, setOperator] = operatorState;
    const [operand, setOperand] = operandState;
    const [result, setResult] = resultState;

    const buttonValue = e.target.innerText;
    if (Number.isInteger(+buttonValue) || buttonValue === '.') {
      if (!!operand) {
        setOperator({...operator, second: operator.second+buttonValue});
      } else {
        setOperator({...operator, first: operator.first+buttonValue});
      }
    } else if (buttonValue === 'DEL') {
      if (result) {
        setOperator({
          first: '',
          second: '',
        }); 
        setOperand('');
        setResult('');
      } else {
        if (!!operand) {
          setOperator({...operator, second: operator.second.slice(0, -1)});
        } else {
          setOperator({...operator, first: operator.first.slice(0, -1)});
        }
      }
    } else if (buttonValue === 'RESET') {
      setOperator({
        first: '',
        second: '',
      });
      setOperand('');
      setResult('');
    } else if (buttonValue === '=') {
      const {first, second} = operator;
      let res;
      if (operand === '+') {
        res = (+first) + (+second);
      } else if (operand === '-') {
        res = (+first) - (+second);
        setResult()
      } else if (operand === '/') {
        res = (+first) / (+second);
      } else if (operand === 'x') {
        res = (+first) * (+second);
      }
      setResult(res)
      setOperator({
        first: res,
        second: '',
      }); 
    } else {
      setOperand(buttonValue);
    }
  }
