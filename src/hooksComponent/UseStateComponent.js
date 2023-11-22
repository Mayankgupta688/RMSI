import { useState, useEffect } from "react";

export default function UseStateComponent() {
    var [counter, setCounter] = useState(0);
    var interval = null;
    useEffect(() => {
        interval = setInterval(function () {
            setCounter((counter) => {
                return counter + 1;
            })
        }, 1000)
        
        return () => {
            clearInterval(interval)
        }
    }, [counter]);
    
    useEffect(() => {
        // Called when Component Mounted
        
        return () => {
            // Called When the component is Destroyed
            // componentWillDestroy.
        }
    }, [])
    
    function updateCounter() {
        setCounter((counter) => {
            return counter + 1;
        });
    }
    
    return (
        <>
            <h1>Counter Value is {counter}</h1>
            <input type="button" value="Click" onClick={updateCounter} />
        </>
    )
}