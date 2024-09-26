class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends user {
    constructor(username,email,password){
        super(username)
        this.email = email 
        this.password = password
    }
    addCources(){
        console.log(`A new cource added by ${this.username}`)
    }
}

const chai =new Teacher('chai','chai@teacher.com','123')
const masalaChai = new user('MasalaChai')
chai.addCources()
masalaChai.user()