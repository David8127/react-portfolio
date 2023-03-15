import { useState } from 'react'
import Header from './components/Header';
import Nav from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <div className="w-screen h-screen flex items-center justify-center">
        <Header />
        <span>Hello World</span>

      </div>

    </div>
  )
}

export default App
