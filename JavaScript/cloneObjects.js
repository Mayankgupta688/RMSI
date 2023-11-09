var originalData = [{
    userName: "Mayank Gupta",
    company: "TechnoFunnel",
    userAge: 35
}, {
    userName: "Anshul Gupta",
    company: "TechnoFunnel",
    userAge: 35
    }];

var cloneData = originalData;
var clonedDataOther = [...originalData];
var trueClonedObject = JSON.parse(JSON.stringify(originalData))

// Object.assign, object.create, recurssion, spread, JSOn way.

