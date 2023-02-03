import { useState } from "react";
import Button from "./components/button/button";

const App = () => {

  const [count , setCount]= useState(0)

  const plus= ()=> setCount(count +1)
  const minus= ()=> setCount(count -1)

  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <div>
        <Button onClick={plus}>plus</Button>
      </div>
      <div>
        <Button onClick={minus}>minus</Button>
      </div>
    </div>
  );
};
export default App;
