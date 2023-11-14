export default function CounterRunComponent() {
    var currentTime = new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
    
    setInterval(function () {
        currentTime = new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
        console.log(currentTime)
    }, 1000)
    
    return (
        <>
            <h1>Current time is {currentTime}</h1>
        </>
    )
}