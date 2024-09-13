import { useState } from "react";
function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-150 flex flex-col justify-between items-center p-10"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-5xl font-bold text-white">
        Chai Aur React
      </h1>
      <div className=" fixed flex flex-wrap justify-center bottom-12 shadow-lg inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
          <button onClick={()=>setColor("red")} className="outline-none rounded-full px-2 py-1"
          style={{backgroundColor:"red"}}>
            Red
          </button>
          <button onClick={()=>setColor("green")} className="outline-none rounded-full px-2 py-1"
          style={{backgroundColor:"green"}}>
            Green
          </button>
          <button onClick={()=>setColor("violet")} className="outline-none rounded-full px-2 py-1"
          style={{backgroundColor:"violet"}}>
            Violet
          </button>
          <button onClick={()=>setColor("indigo")} className="outline-none rounded-full px-2 py-1"
          style={{backgroundColor:"indigo"}}>
            Indigo
          </button>
          <button onClick={()=>setColor("yellow")} className="outline-none rounded-full px-2 py-1"
          style={{backgroundColor:"yellow"}}>
            Yellow
          </button>
          <button onClick={()=>setColor("orange")} className="outline-none rounded-full px-2 py-1"
          style={{backgroundColor:"orange"}}>
            Orange
          </button>
          <button onClick={()=>setColor("silver")} className="outline-none rounded-full px-2 py-1"
          style={{backgroundColor:"silver"}}>
            Silver
          </button>
        </div>
      </div>
      </div>
  );
}

export default App;
