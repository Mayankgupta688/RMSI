var originalData = [{
    userName: "Mayank Gupta",
    company: "TechnoFunnel",
    userAge: 35
}, {
    userName: "Anshul Gupta",
    company: "TechnoFunnel",
    userAge: 30
    }];


var newArray = originalData.map(function(emp) {
    if (emp.userAge > 10) {
        return 
    } else {
    }
})

var newArray = originalData.filter(function(emp) {
    return (emp.userAge > 32 && emp.userName.length > 2)
})

var newArray1 = originalData.filter(emp => (emp.userAge > 32 && emp.userName.length > 2))

var newArray1 = originalData.filter(emp => emp.userAge > 32)

var newArray1 = originalData.filter((emp) => {return emp.userAge > 32})

var newArray1 = originalData.filter((emp) => {
    return emp.userAge > 32
})