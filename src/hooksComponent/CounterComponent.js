import { useState } from "react";

// State is Async...

export default function CounterComponent() {
    var [counter, setCounter] = useState(10);
    var [counterOne, setCounterOne] = useState(20);
    
    function otherFunction() {
        var result = incrementCounter(counter, counterOne); 
        var finalResult = multiplyCounter(result, counter, counterOne);    

        setCounter(finalResult.result)
        setCounterOne(finalResult.resultOne)        
    }
    
    function incrementCounter(val, valOne) {
        return val + valOne
    }

    function multiplyCounter(result, counter, counterOne) {
        return {
            result: counter * result,
            resultOne: counterOne * result
        }
    }    
    
    return (
        <>
            <h1>Counter Value is {counter}</h1>
            <h1>Counter Value is {counterOne}</h1>
            <input type="button" value="Increment" onClick={otherFunction} />
        </>
    )
}