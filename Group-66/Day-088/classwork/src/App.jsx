function App() {
  const age = 20;
  return (
    <>
      <h1>{ age >= 18 ? `You are an adult` : `You are not an adult` }</h1>
      <h1>{ age >= 18 && `You are an adult` }</h1>

    </>
  );
}
// && operator, the left side is the condition, the right side is the output if the condition is true

//  condition && output if true

export default App;

