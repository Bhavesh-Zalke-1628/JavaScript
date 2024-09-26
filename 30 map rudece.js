// const conding  = ['js','css','html','cpp']
// // for each can not return the value 
// const values = conding.forEach((item) => {
//     console.log(item)
//     return item
// });
// console.log(values)

// const num = [1,2,3,4,5,6,7,8,9,10]
// const newNum = num.filter((num) => num>4)
// console.log(newNum)

// //return keyword because of the scope in gennerated using the curli brace 
// const newNum = num.filter((num) => {
//     return num>4
// })

// console.log(newNum)


// const newNum = []
// console.log(newNum)
// num.forEach((elem)=>{
//     if(elem>4){
//         newNum.push(elem)
//     }
// })

// console.log(newNum)

// // map 
// const num = [1,2,3,4,5,6,7,8,9,10]
// // const newNum = num.map((num) => num+10)
// const newNum = num
// .map((num)=>num*10)
// .map((num) => num+1)
// console.log(newNum)


// reduce 

const num =[1,2,3,4,5,6,7,8,9,10]

const total =num.reduce((acc,curVal)=>( acc+curVal),0)

console.log(total)

const shoppingCard = [
    {
        cource :"js",
        price : 999
    },
    {
        cource :"cpp",
        price : 1999
    },
    {
        cource :"Web devlopment",
        price : 4999
    },
    {
        cource :"pinki",
        price : 9999
    },
]
const totalPay = shoppingCard.reduce((acc,item)=>{
    // console.log(acc)
    return(acc+item.price)
},0 )

console.log(totalPay)