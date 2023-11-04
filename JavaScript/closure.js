var userName1 = "Mayank Gupta";

function outerFunction() {
    var userAge = 10;
    var userAddress = "8"

    function innerFunction() {
        var userSalary = 10

        function innerInnerFunction() {
            var userDetails = "ABC"
            console.log(userSalary)
            console.log(userAddress)
            console.log(userAge)
            console.log(userName)
        }

        innerInnerFunction()

        console.log(userSalary)
        console.log(userAge)
        console.log(userAddress)
        console.log(userName)
    }

    innerFunction()

    console.log(userAge)
    console.log(userAddress)
    console.log(userName)
}

outerFunction();
console.log(userName)