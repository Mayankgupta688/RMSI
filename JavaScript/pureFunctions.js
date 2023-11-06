window.name = "Mayank";

function pureFunction(a, b) {
    return a + b;
}

function impureFunction(a, b) {
    return this.name + a + b;
}

window.name = "technoFunnel"

pureFunction(1, 2);

function pureFunction(a, b) { }
function impureFunction(a, b) { }