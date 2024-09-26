// // const user = {
// //     useName : 'bhavesh',
// //     loginCount : 8,
// //     singedIn : true,
// //     getUserDetails :function(){
// //         // console.log('Got user deatils from the user')
// //         // console.log(`${this.useName}`)
// //         console.log(this)
// //     }
// // }
// // const user2 = {
// //     useName : 'bhavesh',
// //     loginCount : 8,
// //     singedIn : true,
// // }
// // console.log(user)
// // // console.log(user.useName)
// // console.log(user.getUserDetails())
// // console.log(this)

// // constructor functon

// const promiseOne = new Promise((resolve, reject) => {})
// const date = new Date;


function user(userName, loginCount, isLoggedIn) {
    this.userName = userName
    this.isLoggedIn = isLoggedIn
    this.loginCount = loginCount
    this.greetings = function () {
        console.log(`${this.userName}`)
    }
    return this
}

// used of the new keyword
const userOne = new user('bhavesh', 8, false)
console.log(userOne)
const userTwo = new user('nutan', 8, false)
// console.log(userTwo)
console.log(user.costructor)

//when use the new
// step 1 empty object can crete  (instance)
// step 2 constructor function can call using the new
// step 3 this function can be inject
// step 4 all data can be acces using constructor function