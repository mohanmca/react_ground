import React, {useRef } from "react";
import Button from './Button';

const ImperativeHandle = (props)  => {
    const buttonRef =  useRef(null);
    return (
            <div>
                <button onClick={() => {buttonRef.current.alterToggle()}}>Parent component</button>
                <Button ref={buttonRef} />
            </div>
    );
};

export default ImperativeHandle;