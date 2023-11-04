console.log(this);
var name = "Mayank";

function getData() {
    console.log(window.name);
}

getData();