import React,{useState,useEffect} from 'react'
import "./App.css"
const StateButton = () => {
    const initialInteger=10;
    const [integerVal,setIntegerVal]=useState(initialInteger);
    useEffect(()=>{        document.title="Chats: "+integerVal
},[]);
    return (
        <>
        <p>{integerVal}</p>
        <div>
                <button onClick={()=>setIntegerVal(integerVal+1)}>Increment</button>
                <button onClick={()=>{if(integerVal!=0){setIntegerVal(integerVal-1)}}}>Decrement</button>
        </div>
        </>
    )
}

export default StateButton
