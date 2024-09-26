// setTimeout(() => {
//     console.log('Abe mai pahile')
// }, 0);
// setTimeout(() => {
//     console.log('start')
// }, 0);
// console.log('hello')
// setTimeout(() => {
//     console.log('good morning')
// }, 1000);


function setUserName(usrname){
    //complex DB call
    this.usrname = usrname
    console.log('called')
}

function createUSer(username , email ,password){
    setUserName.call(this,username) 
    this.email = email
    this.password = password
}

const chai = new createUSer('bhaveh','bhavesh@facebook.com',123)

console.log(chai)