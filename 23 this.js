// // this and arrow function 
// const user = {
//     userName: "bhavesh",
//     price: 999,
//     welcomeMsg: function () {
//         console.log(`${this.userName} welcome to this cource`)
//         console.log(this)
//     }
// }

// // console.log(user.welcomeMsg())
// user.userName = "helo"
// console.log(user.welcomeMsg())

// //This line can retutn the window object
// console.log(this)


// function me 'this' ki value change hoti hai
function gulugulu() {
    let userName = 'bhavesh'
    console.log(this.userName)
}
gulugulu()

// const hello = () => {
//     let userName = "bhavesh"
//     console.log(this)
// }

// hello()

// Arrow function
// //  Explicit (used the return keyword)
// const add = (num1,num2)=>{
//     return (num1+num2)
// }


// // implicit Arrow function
// // (Dont ued the curli beaces as well as the do not used the return keyword)
// // (Following are the type of the implicit arrow function )
// // 1)
// // const add = (num1,num2)=> num1+num2
// // console.log(add(6,10))

// // 2)
// const add = (num1,num2)=> (num1+num2)
// console.log(add(6,10))