import { createContext } from "react";
import Child from "./Child";
import Child2 from "./Child2";
import { ColorProvider } from "./colorProvider";
export const childContext = createContext();

const App = () => {
  const value1 = 'Hello'
  const value2 ='Bye'

  return(<>
    <childContext.Provider value={value1} >
      <Child />
    </childContext.Provider>

    <childContext.Provider value={value2} >
      <Child />
    </childContext.Provider>

    <ColorProvider>
      <Child2 />
    </ColorProvider>
    
  </>)

}

//we have to create a context with means a group of components that are allowed to use same value 
//we get the value from useContext Hook

export default App;