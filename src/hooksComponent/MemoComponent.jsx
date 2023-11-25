import { useState, useMemo, useEffect } from "react";

export default function MemoComponent() {

    var [count, setCount] = useState(0)
    var [otherCount, setOtherCount] = useState(1000);
    

    var data = useMemo(() => {
        return calculateSum()
    }, [count])

    useEffect(() => {
        setInterval(() => {
            setOtherCount((lastValue) => {
                return lastValue + 1;
            })
        }, 1000)
    }, [])

    function calculateSum() {
        var sum = 0
        console.time("Mayank")
        for (let i = 0; i < 30000000; i++) {
            sum = sum + i
        }
        console.timeEnd("Mayank")
        return sum + count;
    }

    return (
        <>
            <h1>Count Value {count}</h1>
            <h1>Other Count Value {otherCount}</h1>
            <h2>Sum is: {data}</h2>
            <input type="button" onClick={() => {
                setCount((oldCount) => {
                    return oldCount + 1;
                })
            }} />
        </>
    )

}