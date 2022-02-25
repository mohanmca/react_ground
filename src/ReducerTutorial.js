import React, { useReducer } from "react";


const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT" : return {count: state.count+1, showText: state.showText }; 
        case "togleShowText":  return {showText: !state.showText, count: state.count }; 
        default: return state;
    }
}

const ReducerTutorial = () => {
    const [state, dispatch] =  useReducer(reducer, {count: 0, showText: true});
    return (
            <div>
                <h1>{state.count}</h1>
                <button 
                    onClick={() => {
                        dispatch({type: 'INCREMENT'});
                        dispatch({type: 'togleShowText'});
                    }}
                >Click here</button>
            {state.showText && <p>This is a text</p>}<br/><br/><br/><br/>
            </div>
    );
}

export default ReducerTutorial;