import { useState } from "react";
import { Employee } from "./components/Employee";
import { ShowEmployee } from "./components/ShowEmployee";

function App() {
  const [state, setState] = useState("show");

  const handlechange = () => {
    if (state === "add") {
      setState("show");
    } else if (state === "show") {
      setState("add");
    }
    console.log(state);
  };

  return (
    <div className="App">
      <button className="togglebtn" onClick={handlechange} 
          style={{backgroundColor:"#0d6efd",color:"white",padding:"10px",border:"0px",margin:"20px"}} >
        {state === "show" ? "Add Employee" : "Show Employee"}
      </button>
      {state === "show" ? <ShowEmployee /> : <Employee />}
    </div>
  );
}

export default App;