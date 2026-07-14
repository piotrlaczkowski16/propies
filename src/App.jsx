import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return(
    <div>
    <h1>{count}</h1>
    <div  style={{display:"flex", textAlign: "center"}}>
    <button style={{width: "150px", height:"300px"}}
      onClick={()=> setCount (count + 13)}
      >
        Increase
      </button>
      <button style={{width: "150px", height:"300px"}}
      onClick={()=> setCount (0)}
      >
        clear
      </button>
      <button style={{width: "150px", height:"300px"}}
      onClick={()=> setCount (count - 17)}
      >
        decrease
      </button>
      
      </div>
    </div>
  );
}
export default App;