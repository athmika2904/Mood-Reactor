import { useState } from 'react';
import './App.css';
import Moodbutton from './Moodbutton.jsx';
function App() {
  const [mood,setmood]=useState("None");
  const thoughts={Happy: ["Today feels amazing!", "Today is enough!" ,"Small steps still matter!","I am allowed to be a beginner!","This moment will pass!", "Something good is coming!","I can try again tomorrow!","Peace can be simple!","I am learning slowly and that is okay!","Not everything needs to be perfect!","I deserve rest!","Little joys are still joys!","I am growing quietly!","It is okay to go at my pace!","I am doing better than I think!","Hope is always nearby!"],
    Nervous: ["What if I mess this up?","Why is my heart beating so fast?","Everyone can probably tell I am nervous!","What if I say something wrong?","I should've prepared more!","Okay just act normal!","Why am I overthinking this?","I wish this was already over!","They're judging me aren't they?","I need to calm down!","Why can't I relax?","I hope I don't forget what to say!","This feels harder than it should be!","I just want to do okay!","Please let this go smoothly!"],
    Excited: ["Something big is coming!","I can't wait for this to start!","This is going to be fun!","Something good is about to happen!","I feel full of energy!","I've been looking forward to this!","I hope it's even better than I imagine!","I want to tell everyone!","This feels like a big moment!","I'm ready for it!","Today feels special!","I love this feeling!","I'm smiling for no reason!","Everything feels possible right now!","I want this moment to last!","Let's go!"]
      }
      const [thought,setThought]=useState("");
  function pickthought(selectedmood){
    const th=thoughts[selectedmood];
    const randthought=Math.floor(Math.random() *th.length);
    setThought(th[randthought]);
  }
  const color={Happy:"#FFFF00",Nervous:"#6C7A89",Excited:"#d35e0b"}
  return (
    <div style={{backgroundColor:color[mood]}}className="moodcard">
      <h1>Mood Reactor</h1>
      <Moodbutton setmood={setmood} pickthought={pickthought}/>
      <h2>Your current mood:{mood}</h2>
      <p>{thought}</p>
    </div>
  )
}

export default App
