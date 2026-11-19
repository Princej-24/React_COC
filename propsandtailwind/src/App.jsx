import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" /> // iske ander array , object // ye pass kr skte ho someObj={myObj} // in the same way as Obj u can pass array also in curly braces like someObj={newArr}
      <Card username="hitesh" />
    </>
  )
}

export default App
// tailwind says that img tag should be closed
// tailwind is responsive in nature
// devui.io koi bhi components chahiye tho isspr jao 
// interview thing = create a small project of increment and decrement number , which i have discussed in the 03counterproject