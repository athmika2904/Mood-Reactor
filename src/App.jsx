import { useState } from 'react'
import './App.css'
function App() {
  const [mood,setmood]=useState("");
  const thoughts={Happy: "Today feels amazing!",
    Nervous: "What if I mess this up?",
    Excited: "Something big is coming!"}
  return (
    <div className="moodcard">
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
