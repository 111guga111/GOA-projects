import useToggle from "../../classwork/Hooks/useToggle";
import useCheckbox from "../Hooks/useCheckbox";
import useCounter from "../Hooks/useCounter";


const App = () => {
  const [count, increase, decrease, restart ] = useCounter()
  const [checkboxValue, handleChange] = useCheckbox()
  const [toggleText, toggleTextFunc] = useToggle()

  
  return (
    <>
      <div>
        <h1>count:{count}</h1>
        <div>
          <button onClick={increase}>increase</button>
          <button onClick={decrease}>decrease</button>
          <button onClick={restart}>restart</button>
        </div>
      </div>

      <div>
        <h1>
          CheckBox:{
              checkboxValue ? 
              ' The checkbox is checked' : ' The checkbox is unchecked'
            }
        </h1>
        <div>
          <button onClick={handleChange}>Check</button>
        </div>
      </div>

      <div>
        <h1>
          Text:{
            toggleText ? 
            'The message is hidden' : 'The message is displayed on the screen' 
          }
        </h1>

        <div>
          <button onClick={toggleTextFunc}>Toggle</button>
        </div>
      </div>


    </>
  )
}

// Custom hooks help reuse logic across components
// They keep code clean, organized, and easier to maintain

export default App;