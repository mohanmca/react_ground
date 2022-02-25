import React, { useImperativeHandle, forwardRef, useState } from "react";

const Button = forwardRef((props, ref)  => {
    const [toggle, setToggle] =  useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle);
        }
    }));

    return (
            <div>
                <button onClick={() => setToggle(!toggle)}>Child component</button>
                {toggle && <p>Toggle</p>}
            </div>
    );
});

export default Button;