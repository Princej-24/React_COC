// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   const [counter, setCounter]  = useState(15) // hooks type // [variable,function = it is respossible for updation of variable
//   // counter m default value 15 hogi 
//   //let counter = 15 // aagar yha s kroge tho value update hogi pr UI m show nhi karega thats why we r using hook

//   const addValue = () => {
//     //counter = counter + 1
//     //setCounter(counter)
//     setCounter(prevCounter => prevCounter + 1)
//     setCounter(prevCounter => prevCounter + 1 )
//     setCounter(prevCounter => prevCounter + 1)
//     setCounter(prevCounter => prevCounter + 1)
    
//   }

//   const removeValue = () => {
//     setCounter(counter - 1)
//   }
  
//   return (
//     <>
//       <h1>Chai aur react</h1>
//       <h2>Counter value: {counter}</h2>

//       <button
//       onClick={addValue}
//       >Add value {counter}</button> 
//       <br />
//       <button
//       onClick={removeValue}
//       >remove value {counter}</button>
//       <p>footer: {counter}</p>
//     </>
//   )
// }

// export default App

// hooks = Hooks are special functions in React that allow functional components to use React features like state, lifecycle methods, and other functionality
// Hooks allow functional components to do more things



import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 15

  // const addValue = () => {
  //   //counter = counter + 1
  //   setCounter(counter + 1)
  // }


const addValue = () => {
    //counter = counter + 1
    if(counter<20){
      setCounter(counter + 1)
    }
  }


  // const removeValue = () => {
  //   setCounter(counter - 1)
  // } // is wale code s value negative m bhi jayega 

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  } // iss wale s negative k neche nhi jayega

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button 
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App