import React, { useEffect, useLayoutEffect, useRef } from 'react';

function LayoutEffectTutorial() {
    const inputRef = useRef(null);

    useLayoutEffect(() =>{
        console.log(inputRef.current.value); 
    })

    useEffect(() =>{
        inputRef.current.value += '2';
    })

    return (<div>
        <input placeholder='type here' value="LayOut" ref={inputRef} readOnly />
    </div>)

}

export default LayoutEffectTutorial;