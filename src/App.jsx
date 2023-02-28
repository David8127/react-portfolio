import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <span>Hello World</span>
    </div>
  )
}

export default App
