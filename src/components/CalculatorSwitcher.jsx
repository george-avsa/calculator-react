export default function CalculatorSwitcher({stateTheme, ...props}) {

  const [theme, setTheme] = stateTheme;

  function switchSLide(e) {
    const circle = document.querySelector('.theme-switcher__btn')
    const id = Number(e.target.getAttribute('id'));

    if (id === 1) {
        setTheme('Blue');
        circle.style.left = '5px';
    } else if (id === 2) {
        setTheme('White');
        circle.style.left = '27px'
    } else if (id === 3) {
        setTheme('Purple');
        circle.style.left = '50px'
    }
  }
  
  return (
    <div className={"theme-switcher__switch displayBack" + theme}>
        <div className={"theme-switcher__btn equalBtn" + theme}></div>
        <div className="theme-switcher__sections">
            {[1, 2, 3].map(item => (
                <div 
                    className="theme-switcher__section" 
                    id={item}
                    key={item}
                    onClick={switchSLide}
                ></div>
            ))}
        </div>
    </div>
  )
}
