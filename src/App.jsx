import { useState } from 'react'
import Header from './components/Header';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header />
      <div className="pt-15 flex items-center justify-center">
        <About/>

      </div>

    </div>
  )
}

export default App
