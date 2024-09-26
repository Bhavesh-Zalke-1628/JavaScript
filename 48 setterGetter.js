// // class user {
// //     constructor(Email,password){
// //         this.Email=Email
// //         this.password = password
// //     }
// //     get Email(){
// //         return this._Email.toUpperCase()
// //     }
// //     set Email(value){
// //         this._Email = value
// //     }
// //     get password(){
// //         return `${this._passwoed}bhavesh`
// //     }
// //     set password(value){
// //         this._passwoed= value.toUpperCase()
// //     }
// // }

// // const bhavesh = new user('bhavesh@gmail.com','abc')
// // console.log(bhavesh.password)
// // console.log(bhavesh.Email)


// //using the function
// // Peopertie with setter and getter

// // function Two(email , password){
// //     this._email = email,
// //     this._passwoed = password
// //     Object.defineProperty(this , 'email',{
// //         get :function(){
// //             return this._email.toUpperCase()
// //         },
// //         set : function(value){
// //             this._email = value
// //         }
// //     })
// //     Object.defineProperty(this , 'password',{
// //         get :function(){
// //             return this._password.toUpperCase()
// //         },
// //         set : function(value){
// //             this._password = value
// //         }
// //     })
// // }

// // const chai = new Two('abc@gmail.com',123)
// // console.log(chai.email)


// // object _get , _set

// const user ={
//     _email : 'abc@gmaikl.com',
//     _password : 'abc',
//     get email(){
//         return this._email.toUpperCase();
//     },
//     set (value){
//         this._email=value
//     }
// }



// const tea = Object.create(user)

// console.log(user.email)
// console.log(user._password)


