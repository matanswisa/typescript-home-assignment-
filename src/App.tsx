import { useState } from 'react';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Hello, Vite + React + TypeScript!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default App;
