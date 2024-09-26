//Dates 
// let date = new Date();
// console.log(date)
// console.log(date.toDateString())
// console.log(date.toLocaleDateString())
// console.log(typeof(date))


// console.log(Date.now())
//convert the time into the secont /1000
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getMonth()+1)
console.log(newDate.getFullYear())
console.log(newDate.getHours())
console.log(newDate.getMinutes())
console.log(newDate.getSeconds())

console.log(newDate.toLocaleDateString('default',{
    weekday:"long",
}))

 