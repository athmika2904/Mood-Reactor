import { useState } from 'react'
import './App.css'
function App() {
  const [mood,setmood]=useState("");
  return (
    <div className="moodcard">
      <h1>Mood Reactor</h1>
      <button onClick={()=>setmood("Happy")}>Happy</button>
      <button onClick={()=>setmood("Nervous")}>Nervous</button>
      <button onClick={()=>setmood("Excited")}>Excited</button>
      <h2>Your current mood:{mood}</h2>
    </div>
  )
}

export default App
