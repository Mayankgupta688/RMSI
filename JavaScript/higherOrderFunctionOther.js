// Function which return a function

function someFunction() {
    function innerFunction() {
        alert("Inner Function")
    }
    
    return innerFunction;
}

var fnReturned = someFunction();
fnReturned();
