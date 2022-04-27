import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const handleAdd = () => {
  setCount(count+1);
  }

  const handleSub = () => {
    if(count<=0){
      return
    }
    setCount(count-1);
    }

  const handleDouble = () => {
    setCount(count*2);
  }

  

  return (
    <div className="App">
      <h1>Counter: { count } </h1>
      <button onClick={handleAdd} style={{color:"white",background:"#2591fe",padding:"10px 20px",margin:"10px"}} >Increment</button>

      <button onClick={handleSub} style={{color:"white",background:"#2591fe",padding:"10px 20px",margin:"10px"}} >Decrement</button>

      <button onClick={handleDouble} style={{color:"white",background:"#2591fe",padding:"10px 20px",margin:"10px"}} >Double</button>

      <div> <h1>Number is { count%2===0 ? "Even" : "Odd"}</h1>
      
      </div>
    </div>
  )
}

export default App
