var userDetails = [{
    userName: "Mayank Gupta",
    company: "TechnoFunnel",
    userAge: 35
}, {
    userName: "Anshul Gupta",
    company: "TechnoFunnel",
    userAge: 35
}]

// Old Objects are copied to new Array created using Spread.

var newUserDetails = [...userDetails];

newUserDetails[0].userName = "Xyz";

console.log(userDetails[0].userName) 