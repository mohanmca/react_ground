import React, {useRef} from "react";

function RefTutorial() {
    const inputRef = useRef(null);

    const clickHandler = () => {
        console.log(inputRef.current.value); 
        inputRef.current.focus();
    }

    return (
        <div>
            <input placeholder="Type here" ref={inputRef}></input>
            <button onClick={clickHandler}>Click</button>
        </div>
    );
}

export default RefTutorial;