// // // let myArray = [1,2,3,4]
// // // console.log(myArray)


// // function multiplBy5(num){
// //     this.num=num 
// //     console.log(num)
// //     return num*5
// // }

// // multiplBy5.power = 2

// // // console.log(multiplBy5.power)
// // // console.log(multiplBy5.prototype)

// // function createUser(username,score){
// //     this.username = username
// //     this.score = score
// // }

// // createUser.prototype.increment=function(){
// //    this.score++
// // };
// // createUser.prototype.printMe=function(){
// //     console.log(`Price is ${this.score} and the name is ${this.username}`)
// // }
// // const chai =new createUser ('chai',20)
// // const tea =new  createUser('tea',100)

// // chai.printMe()
// // tea.printMe()


// let myHeros = ['thor','spiderman']
// let heroPower = {

//     thor : 'hamer',
//     spiderman : 'sling',
//     getSpiderPower : function(){
//         console.log(`Spidy power is ${this.spiderman}`)
//     }
// }

// Object.prototype.bhavesh= function(){
//     console.log('bhavesh present in all object')
// }

// Array.prototype.heyBhavesh=function(){
//     console.log('I am bhavesh zalke')
// }
// // heroPower.bhavesh();
// // // heroPower.heyBhavesh()
// // myHeros.bhavesh()
// // myHeros.heyBhavesh()


// // inherirtance 

// const user = {
//     name  :'bhavesh',
//     email : 'bhavesh@google.com'
// }
// const teacher = {
//     makeVideo : true
// }

// const teachingSupport = {
//     isAvilable : false
// }
// const taSupport ={
//     makeAssignment : 'js Assignment',
//     fullTime : true,
//     __proto__:teachingSupport
// }

// const x = teacher.__proto__=user 

// moderSyntax 
// console.log(Object.setPrototypeOf(teachingSupport,teacher))

let anotherUsrename = 'Hanji          '
String.prototype.trueLenght=function(){
    console.log(`${this}`)
    console.log(`the True lenght is :${this.trim().length}`)
}

anotherUsrename.trueLenght()
'bhavesh'.trueLenght();
'vaishnavi'.trueLenght();