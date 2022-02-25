import React, { useEffect, useState } from "react";
import axios from 'axios'

function EffectTutorial() {

    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {                     
            let n = response.data.length;
            console.log(count);
            if(count>0) {
                let k = Math.ceil(Math.random() * (n - 0) + 0);
                console.log(response.data[k]);
                
                setData(response.data[k].email);
            }            
            console.log(response.data);
        });
     }, [count]);

    return (<div>
        <h2>Hello world! - {data}</h2>
        <h2>{count}</h2>
        <button onClick={() => {
            setCount(count + 1);
        }}>Increment-UseEffect</button>
    </div>);
}

export default EffectTutorial;