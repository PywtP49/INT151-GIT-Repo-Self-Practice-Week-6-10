// Design a Fumction idGenerator that generates unique IDs
// automatically. Each time the function is called, it should return the
// next ID number, starting from 1 incresing by 1.

const idGen = idGenrator()

function idGenrator() {
    let NextID = 0
    return function NewID() {
        return ++NextID
    }
}

console.log(idGen()) // 1
console.log(idGen()) // 2
console.log(idGen()) // 3

// Write a function outerFunction(a) that contains a nested function 
// innterFunction (b). The outerFunction should return the result of a + b
// by calling innerFunction.

function outerFunction(a) {
    return function innnerFunction(b) {
        return a + b
    } 
}

const addFive = outerFunction(5)

console.log (addFive(3)) // 8

const addTen = outerFunction(10)
console.log(addTen(2)) // 12