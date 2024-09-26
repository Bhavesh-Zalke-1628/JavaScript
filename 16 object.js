const mySym = Symbol('key1')
const myObj = {
    name: 'bhavesh',
    age: 20,
    [mySym]: "mykey 1",
    "full name": "bhvesh subhashrao zalke",
    emial: "bhavesh@gmail.com"
}

// // accesing the data from the object    
// console.log(myObj.name)
// console.log(myObj["full name"])
// console.log(myObj[mySym])
// // console.log(typeof myObj[mySym])
Object.freeze(myObj)
myObj.name = "sanyam"
console.log(myObj)

// myObj.greting = function () {
//     console.log('hello i am bhvesh')
// }
// console.log(myObj.greting())

// myObj.gretingTwo = function () {
//     console.log(`hello i am ${this["full name"]}`) // backticks is know as the string interpoalation
// }

// console.log(myObj.gretingTwo())