

function App() {
  const lst = ["1","2","3","4","5"]

  return (
    <ul>
      {lst.map((it,index) =><li key={index}> {it} </li>)}
    </ul>
  )
  
}

export default App

