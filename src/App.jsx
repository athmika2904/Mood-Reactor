import { useState } from 'react'
import './App.css'
function App() {
  const [mood,setmood]=useState("");
  const thoughts={Happy: "Today feels amazing!",
    Nervous: "What if I mess this up?",
    Excited: "Something big is coming!"}
  const color={Happy:"#FFFF00",Nervous:"#6C7A89",Excited:"#e86f19"}
  return (
    <div style={{backgroundColor:color[mood]}}className="moodcard">
      <h1>Mood Reactor</h1>
      <button onClick={()=>setmood("Happy")}>Happy</button>
      <button onClick={()=>setmood("Nervous")}>Nervous</button>
      <button onClick={()=>setmood("Excited")}>Excited</button>
      <h2>Your current mood:{mood}</h2>
      <p>{thoughts[mood]}</p>
    </div>
  )
}

export default App
