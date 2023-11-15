class Employee {
    counter = 0;
    constructor() {
        // What is the value of "this" ?
        console.log(this.counter); 

        setTimeout(function() {
            // What is the value of "this" ?
            console.log(this.counter); 
        }, 5000)
    }
}

var obj = new Employee();