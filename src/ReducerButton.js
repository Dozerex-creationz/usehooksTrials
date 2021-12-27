import React,{useReducer,useEffect} from 'react'
import "./App.css"

const reducer=(state,action)=>{
    if(action.type=="incr"){
        state=state+1;
    }
    else if(action.type=="decr" && state>0){
        state=state-1
    }
    return state;
};

const ReducerButton = () => {

    const initialInteger=10;

    const [state,dispatch]=useReducer(reducer,initialInteger);
    useEffect(()=>{
        document.title="Chats: "+state
    });
    return (
        <>
        <p>{state}</p>
        <div>
                <button onClick={()=>dispatch({type:"incr"})}>Increment</button>
                <button onClick={()=>dispatch({type:"decr"})}>Decrement</button>
        </div>
        </>
    )
}

export default ReducerButton
