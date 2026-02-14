function Thoughtcard({mood,thought,emoji}){
    return(<div className="thoughtcard">
        <h2>Your current mood:{mood}{emoji}</h2>
        <p>{thought}</p>
    </div>);
}
export default Thoughtcard;