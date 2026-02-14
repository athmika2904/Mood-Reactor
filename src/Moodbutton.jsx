function Moodbutton({setmood,pickthought}){
    return(
        <div>
            <button onClick={()=>{setmood("Happy"); pickthought("Happy");}}>Happy</button>
            <button onClick={()=>{setmood("Nervous"); pickthought("Nervous");}}>Nervous</button>
            <button onClick={()=>{setmood("Excited"); pickthought("Excited")}}>Excited</button>
        </div>
    );
}
export default Moodbutton;