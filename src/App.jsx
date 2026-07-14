import { useState } from "react";

function App() {
  const [liked, setLiked] = useState(false);

  return(
    <div>
    <button  style={{width:"400px", height:"300px"}} onClick={()=> setLiked(!liked)}>
      {liked ? "Liked" : "Like"}
    </button>
      
    </div>
  );
}
export default App;