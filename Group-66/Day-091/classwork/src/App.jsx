import Hero from "./Hero"

function App() {
  return(
    <div>
      <Hero title="Welcome" description="this is the hero component">
        <p>This is children prop</p>
      </Hero>
      <Hero title="explanation" description="this is the hero component 2">
        <p>prop.children returns children of the function tag</p>
      </Hero>
    </div>
  )
}

export default App
