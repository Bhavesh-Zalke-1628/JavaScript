// //promises are three steps 
// // resolve => reject => pending
// // promises ko banana sikho  not a consume
// const promises = new Promise((resolve, reject) => {
//     if(0 == true){
//         console.log('correcct ')
//         resolve()
//     }else{
//         console.log('wronge')
//         reject("something went wronge")
//     }
// })

// promises.then(function(){
//     console.log('promise consumed')
// })
// promises.catch(function(error) {
//     console.log('promise dead', error)
// })

// promises.finally(function() {
//     console.log('sb moh maya hai ')
// })

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task two')
        resolve()
    }, 1000);
})

    .then(function () {
        console.log('Second task is consumed')
    })

const promiseThreee = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: 'bhavesh', age: 20 })
    }, 1000);
})

promiseThreee.then(function (user) {
    console.log(user)
})



promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: 'golu', passWord: '123' })
        } else {
            reject('ERROR Something went wronge')
        }
    }, 2000);
})

const username = promiseFour.then((user) => {
    console.log('promiseFour', user)
    return user.username
})
    .then((username) => {
        console.log(username)
    })
    .catch(function (error) {
        console.log(error)
    }).finally(function () {
        console.log('The promise is either resolve are reject')
    })


// promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({ username: 'javaScript', passWord: '123' })
//         } else {
//             reject('ERROR  JS ent Wronge')
//         }
//     }, 2000);
// })


// promiseFive.then(function(){

// })
// .catch(function(){

// })


// async function comsumedPromiseeFive() {
//     try {
//         const response = await promiseFive
//         console.log(response)

//     } catch (error) {
//         console.log(error)
//     }
// }
// comsumedPromiseeFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(`E:${error}`)
//     }
// }

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((e) => {
//         console.log(`E : ${e}`)
//     })