import { useCallback, useState } from 'react';
import './App.css';
import Child from './Child';

// Memoization is a speed optimization technique in programming, where given a function, you return a cached version of the output if the same inputs are used.
// In react we can memoize components (where inputs are props), functions, ot just a regular computed value.
function App() {

  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('');

  // useCallback
  /* useCallback also take dependency array same as useEffect
  imp -> if you not provide any dependency it will declare the function only once and counter value will be updated only once (it will not know if the counter is updated and thus it will add (0+1)every time)*/ 
  const updateCounterFromChild = useCallback(() => setCounter(counter + 1),[counter])

  return (
    <div className="App">
      <h1>Hello form Parent: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <br/>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      {/* sending callback to updateCounter

      imp -> on every input(onChnage) components re-render thus on every render call-back is re-declared and thus child will render even if you use React.memo

      To avoid this use useCallback to memoize the callback
       */}
      <Child counter={counter} updateCounter={updateCounterFromChild}/>
    </div>
  );
}

export default App;
