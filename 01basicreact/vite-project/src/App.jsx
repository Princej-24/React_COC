// function App() {
//   return (
//     <h1>hello</h1>
//   )
// }

// export default App

// agar hme variables inject krna hai tho hme curly braces syntax use krna hoga 



function App() {
  const username = "chai aur code"

  return (
    <> // tum yha div bhi bna skte ho ye abhi bhi single hi variable h as a div 
    <Chai/>
    <h1>chai aur react {username}</h1> // this is curly braces syntax also called evaluated expression 
    <p>test para</p>
   </>
  )
}

export default App