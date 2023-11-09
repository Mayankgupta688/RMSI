var array = [1, 2, 3, 4, 5, 6]

var newArrayCopy = array

console.log(array == newArrayCopy)  // True

var newArray = [...array]  

console.log(array == newArray)  // False