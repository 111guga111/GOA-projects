import { useState } from 'react'

function App() {
  const [name,setName] = useState(``);
  const [lastname,setLastname] = useState(``);

  const handleNameChange = ({target}) => {
    const {value} = target
    setName(value)
  }
  const handleLastnameChange = ({target}) => {
    const {value} = target
    setLastname(value)
  }


  const [formState,setformState] = useState({});

  const Change = ({target}) =>{
    const {name} = target
    const {value} = target
    
    setformState(prev => ({...prev, [name]:value}))
  }
  
  return (
    <>


      <main>
        <form>
          <h1>Name: {name}</h1>
          <input type='text' name='name' onChange={handleNameChange} placeholder='Name'/>

          <h2>Lastname: {lastname}</h2>
          <input type='text' name='lastname' onChange={handleLastnameChange} placeholder='lastname'/>
        </form>


        <form>
          <h1>Name: {formState.name}</h1>
          <input type='text' name='name' onChange={Change} placeholder='Name'/>

          <h2>Lastname: {formState.lastname}</h2>
          <input type='text' name='lastname' onChange={Change} placeholder='lastname'/>
        </form>
      </main>
    </>

    //first way we use separate function for same work instead of using having one function controling it, witch is bad, but its good that it changes instantly when entering

    //second way we use object to then control entire thing with one function, witch is good for optimisation
  )
}

export default App
