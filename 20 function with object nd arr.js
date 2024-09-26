// function calculateCartPrice (val1,val2,...num1) {
//     return num1
// }

// console.log(calculateCartPrice(1,2,3,4,5,6))


const user = {
    name: 'bhavesh',
    prices: 1999
}

function handleObject(anyObject) {
    console.log(`The username is ${anyObject.name} and the price is ${anyObject.price}`)
}


// handleObject(user)
handleObject({
    name: "hello",
    price: 1585
})

const myNewArray = [1200, 1125, 154545, 2457]

function returnSecondValue(getArray, ...n1) {
    // console.log(n1)
    return getArray[0]

}
console.log(returnSecondValue(myNewArray))