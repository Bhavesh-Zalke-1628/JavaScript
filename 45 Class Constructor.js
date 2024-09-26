// // ES6 

class user {
    // usernmae => parameter
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    ecryptedPassword() {
        return `${this.password}abc`
    }
    chanedUserName() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user('bhavesh', 'bhaveh@gmail.com', '123')
console.log(chai.ecryptedPassword());
console.log(chai.chanedUserName())


// //Behind the scene
// function user(username, email, password) {
//     // usernmae => parameter
//     this.username = username
//     this.email = email
//     this.password = password
// }

// user.prototype.ecryptedPassword = function () {
//     return `${this.password}abc`
// }

// user.prototype.chanedUserName = function () {
//     return `${this.username.toUpperCase()}`
//     // return `${this.username.toUpperCase()}`

// }

// const tea = new user('bhavesh', 'bhaveh@gmail.com', '123')
// console.log(tea.ecryptedPassword());
// console.log(tea.chanedUserName())


// ***************************** 