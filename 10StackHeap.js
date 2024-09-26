//Stack memory 
let myName ="bhavesh"

let anotherName = myName
console.log(anotherName)

anotherName ="tech"
console.log(anotherName)


//Heap memory 
let userOne = {
    Email : "user@google.com",
    id : 10,
}


let userTow = userOne;
userTow.Email = "bhavesh@google.com"

console.log(userOne.Email)
console.log(userTow.Email)