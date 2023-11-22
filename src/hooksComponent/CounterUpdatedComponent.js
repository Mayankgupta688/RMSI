import { useState } from "react";

// State is Async...

export default function CounterUpdatedComponent() {
    
    var data = 10;
    
    setTimeout(function () {
        setCounter(counter + 1);
    }, 1000);

    var [counter, setCounter] = useState(0);
    
    return (
        <>
            <h1>Updated The Counter Value is {counter}</h1>
        </>
    )
}