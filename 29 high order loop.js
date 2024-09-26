// // for of
// // for (const num of object) {

// // }
// // obejct => array, obejct, String 
// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = 'Hello World!'

// for (const i of greetings) {
//     console.log(`Each char is ${i}`)
// }

// // maps

// //The map is used for the unique value in the object or the array or any const 
const map = new Map()
map.set('In', 'india')
map.set('fr', 'france')
map.set('usa', 'United state of america')
map.set('In', 'india')
console.log(map)
// for (const [key,value] of map) {
//     console.log(key,':-',value)
// }

// const myObj = {
//     'game1' :'hello', 
//     'game2' :'hi', 
// }

// Object are not iterable 
//for of not work on the object 
// for (const iterator of myObj) {
//     console.log(iterator)
// }

// const myObject = {
//     js:"javaScript",
//     cpp : 'c++',
//     rb : 'ruby',
//     c : 'C Program'
// }

// for (const key in myObject) {
//     console.log(`${key} is for ${myObject[key]}`)
// }

// const programming = ['cpp','js','java','c']

// for (const key in programming) {
//     console.log(programming[key])
// }

// const map =  new Map()
// map.set('In','india')
// map.set('fr','france')
// map.set('usa','United state of america')
// map.set('In','india')
// console.log(map)
// for (const [key,value] of map) {
//     console.log(key,':-',value)
// }

// for (const key in map) {
//     console.log(key)
// }

// const programming = ['cpp','js','java','c']

// programming.forEach( (item) => {
//     console.log(item)
// })

// function printMe (item) {
//     console.log(item)
// }

// programming.forEach(printMe)

// programming.forEach((item,index,arr) => {
//     console.log(index,item,arr)
// })

const myCoding = [
    {
        languageName: 'javaScript',
        languageNameFilName: 'js'
    },
    {
        languageName: 'java',
        languageNameFilName: 'java'
    },
    {
        languageName: 'python',
        languageNameFilName: 'py'
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName, ':-',
        item.languageNameFilName)
    console.log(item.languageNameFilName)
})