import { useState } from "react";

function App() {
  const stock = 5 ;

  return (
    <div>
      {stock > 0
      ? <h1>in stock</h1>
      : <h1>nima nie było i nie będzie</h1>}
    </div>
  );
}

export default App;