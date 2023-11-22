import { useState, useEffect } from "react";

export default function UsingEffectsComponent() {
    
    var [counter, setCounter] = useState(0);
    var [counterOther, setCounterOther] = useState(1000);
    var [counterOtherOne, setCounterOtherOne] = useState(10000);
    
    setTimeout(function () {
        setCounter(counter + 1);
    }, 1000)
    
    setTimeout(function () {
        setCounterOther(counterOther + 1);
    }, 5000)
    
    // This is called only During Mounting
    useEffect(() => {
        // Equivalant to ComponentDidMount
        console.log("Component is Mounted");
    }, [])


    useEffect(() => {
        // Equivalant to ComponentDidMount
        console.log("Component is Mounted");
    }, [])
    
    // Called every time when counter changes
    useEffect(() => {
        // Equivalant to ComponentDidMount & ComponentDidUpdate
        console.log("Counter is Updated");
    }, [counter])
    
    // Called every time when counterOther changes
    useEffect(() => {
        // Equivalant to ComponentDidMount & ComponentDidUpdate
        console.log("CounterOther is Updated");
    }, [counterOther])
    
    // Called every time when counterOther changes
    useEffect(() => {
        // Equivalant to ComponentDidMount & ComponentDidUpdate
        console.log("CounterOther is Updated");
    }, [counterOther, counter]);
    
    // Anyways, called always.
    useEffect(() => {
        // Equivalant to ComponentDidMount & ComponentDidUpdate
        console.log("This is Updated for All counters");
    })
    
    return <h1>This is the Original Component {counter} {counterOther} {counterOtherOne}</h1>

}