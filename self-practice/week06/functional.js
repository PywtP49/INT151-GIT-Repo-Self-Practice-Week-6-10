const greet = (name, formatter) => formatter(name)

const shout = text => text.toLowerCase() + ": This is lower Case text"

console.log(greet("Thanakrit Max 3 med", shout))

// Declarative Code
const numbers = [1,2,3,4,5]

// Function Types

function a() {
    return 'a'
}
function b() {
    return 'b'
}

function x() {
    function y() {}
    const z = () => {
        const m = () => {
            function n() {

            }
        }
    }
}