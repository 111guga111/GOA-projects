import { useMemo, useState } from "react";

function PrimeCalculator() {
  const [number, setNumber] = useState(10000); 
  const [counter, setCounter] = useState(0);   

  
  const calculatePrimes = (n) => {
    console.log("Calculating primes...");
    const primes = [];
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(i);
    }
    return primes;
  };

  const primes = useMemo(() => calculatePrimes(number), [number])
  
  

  //useMemo stores values meaning, if we call function with same arguments it will knwo not to render again and will just return previous value
  // caching means storing the value

  return (
    <div>
      <h1>Prime Number Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter
      </button>
      <p>Counter: {counter}</p>
      <p>Number of primes: {primes.length}</p>
    </div>
  );
}

export default PrimeCalculator;