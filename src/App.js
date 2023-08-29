import React , {useState} from "react";

function App() {
  const [bgColor , changeBgColor] = useState("red");

  return (
    <div style={{background : bgColor}}>
      <h1>Hello World</h1>
      <button onClick={() => {changeBgColor("yellow")}} onDoubleClick={() => {changeBgColor("green")}}>Change Bg Color</button>
    </div>
  )
}

export default App;
