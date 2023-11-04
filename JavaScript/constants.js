const a = false;
// a = true // Not Allowed

var employeeArray = ["Mayank", "Anshul"];
var employeeArrayNew = ["Mayank", "Anshul"];
employeeArray.push("Meha");

console.log(employeeArrayNew === employeeArray)

// This is an Issue
// employeeArray = [];

console.log(employeeArray.length)

const employee = {
    name: "Mayank",
    age: 10
}

employee.age = 20;
employee.designation = "Developer"

employee = {}

const pi = 3.14
pi = pi + 1