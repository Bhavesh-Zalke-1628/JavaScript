
// var is global scope 

// if 

// if (true) {
// this will  be execute    
// }

// if (flase) {
// this will not be execute
// }

// = is used to assign 
// == used to the check the value 
// === it used to checked the value as well as the data type (Strict chacking)

// let temperature = 50
// if(temperature === 50){
//     console.log('It is less than 50')
// }else{
//     console.log("Temprature is greater than 50")
// }

// const score = 12
// if(score<50){
//     // let it is the block scope
//     let power = 'fly'
//     console.log(`User power:${power}`)
// }
// // console.log(`User power ${power}`)

// shorthand notation

const balance = 1000
// it is the not readable code // company can be irreted for you 
// if (balance<500) console.log('test'),console.log('test')

// if(balance < 500){
//     console.log('less than 500')
// }else if(balance < 750){
//     console.log('less than 750')
// }else if(balance < 900){
//     console.log('less than 750')
// }else{
//     console.log('less than 1200')
// }

// const useLoggedIn = true 
// const debitCard  = true
// if (useLoggedIn && debitCard && 2==3) {
//     console.log('Allow to purchase the cource')
// }
// switch 
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// const month = 'jan'
// switch (month) {
//     case 1:
//         console.log('jan')
//         break;
//     case 'jan':
//         console.log('feb')
//         break;
//     case 3:
//         console.log('march')
//         break;
//     case 4:
//         console.log('apr')
//         break;

//     default:
//         console.log('december')
//         break;
// }

// truthy value 
//  true , "false" "0" " ", [] , {}, function( ){} //empty function 

// falsy value 
//  flase , 0 , -0, bigINt ,"",undefined , null, NaN
const UserEmail = []
if (UserEmail.length == 0) {
    console.log("Array is empty")
}

const emptyObj = {}
if (Object.keys(emptyObj).length == 0) {
    console.log("The object is empty")
}

// special case
// nulishimg colasing opearator (??): it is used for the null and undefined
let val1
val1 = 5 ?? 10
console.log(val1)
// val1 = null ?? 25
// console.log(val1)
// val1 = undefined ?? 5 ?? 10
// console.log(val1)

// ternary operator 

// condition  ? true : false
let price = 7.999
price >= 8 ? console.log('hello') : console.log('byy')
