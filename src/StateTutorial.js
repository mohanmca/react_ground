import React, {useState} from 'react'


const StateTutorial = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("Pedro");
    const increment = () => {
        setCounter(counter+1);
        console.log(counter)
    }
    let onChange = (event) => {
        const newValue  = event.target.value;
        console.log(inputValue);
        setInputValue(newValue);
    }
    return (
        <div>
            <input placeholder='enter something...' onChange={onChange}/>
            <br/><br/><br/>
            {counter}
            <button onClick={increment}> Increment-{counter}</button>
        </div>
    );    
}

export default StateTutorial;

