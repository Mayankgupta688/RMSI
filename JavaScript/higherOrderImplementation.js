// Function which return a function

function someFunction(outerFunction) {
    var name = outerFunction()
    function innerFunction() {
        alert("User Name is: " + name)
    }
    
    return innerFunction;
}

function returnName() {
    return "TechnoFunnel"
}

var fnReturned = someFunction(returnName);
fnReturned();
