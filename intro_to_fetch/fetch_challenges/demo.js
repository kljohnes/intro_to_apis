// Multi line body AKA "block body"
let fun1 = () => {
    return "Hello" //you have to use return to give data back
}

// Single line body AKA "concise body"
let fun2 = () => "Hello" //Here the data is just returned

//We won't be using these
let fun3 = () => (
    "Hello"
)// I will not be writing these, they have bugs often

// let makeFullName = (fName, lName) => {
//     return fName + " " + lName
// }
// console.log(makeFullName("Kate", "Johnes")) //Block body

let makeFullName = (fName, lName) => fName + " " + lName //concise
console.log(makeFullName("Kate", "Johnes"))