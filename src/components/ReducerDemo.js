 import { useReducer, useState } from "react";

 var initialState = {count : 0}; // module Scope
 
 function reducer(state, action){

    switch(action.type){
        case 'like':
            return {count : state.count + 1};
        case 'dislike':
            return {count : state.count - 1};
    }
 }


 export default function ReducerDemo(){

    const [ state , dispatcher] = useReducer(reducer, initialState);

    function handleLike(){
        dispatcher({
            type : 'like'
        })
    }

    function handleDislike(){
        dispatcher({
            type : 'dislike'
        })
    }

    return(
        <div className="container-fluid">
            <h2>Like Counter {state.count}</h2>
            <button onClick={handleLike}>Like</button>
            <button className="m-2" onClick={handleDislike}>Dislike</button>

        </div>
    )

}