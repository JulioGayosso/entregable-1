import { useState } from 'react'
import './App.css'
import QuotesBox from './components/QuotesBox'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
  
   <QuotesBox/>


    </div>
  )
}
export default App