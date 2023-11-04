// Function which take function as a function parameter

debugger;
function someFunction(anotherFunction) {
    anotherFunction();
}
var abc = function () {
    debugger
    alert("Hello")
}

function abcd () {
    debugger
    alert("Hello")
}

someFunction(abc)
someFunction(abcd)
someFunction(function() { alert("Hello") })