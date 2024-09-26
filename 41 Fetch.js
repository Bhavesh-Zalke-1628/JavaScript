// async function getAllUsers(){
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

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((e)=>{
    console.log(`E : ${e}`)
})