function sayMyName() {
    console.log('b')
    console.log('h')
    console.log('a')
    console.log('v')
    console.log('e')
    console.log('s')
    console.log('h')
}

// sayMyName()

function addTwoNum(number1, numbeer2) {
    console.log('bhavesh')
    console.log('zalke')
    return (number1 + numbeer2)
    //function return krne ke bad koi bhi code execute nhi hota hai 
    console.log('bhavesh')
    console.log('zalke')
}
// console.log(addTwoNum(3, 4))


function userLoggedInMSg(userName) {
    if (!userName) {
        console.log('Please Enter a username')
        return
    }
    return console.log(`${userName} is looged in now `)
}
(userLoggedInMSg('bhavesh'))