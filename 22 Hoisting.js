function one() {
    const useName = "bhavesh"
    function two() {
        const webSite = 'youtube'
        console.log(useName)
    }
    // console.log(webSite)
    two()
}
// one()

if (true) {
    const name = 'bhavesh'
    if (name === 'bhavesh') {
        const webSite = 'youtube'
    }
}
// console.log(name)

//**********************************interasting ********************************

//it is the simple function
console.log(addOne(5))

function addOne(num) {
    return num += 1
}

// it is the hosting method  
// console.log(addVTwo(10))
// it is the expression 
const addVTwo = function (num) {
    return num + 1
}

console.log(addVTwo(10))