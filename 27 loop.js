// // for 
// for (let index = 0; index <= 10; index++) {
//     const element =index;
//     if(element==5){
//         console.log('it is the best number')
//     }
//     console.log(element)
// }

// // console.log(element)

// for (let i  = 1; i  <= 10; i ++) {
//     console.log(`The table of the ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} =`+ " "+ i*j)
//     }
// }


// const myArray = [1,2,3,4,5,6]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
// }
// console.log(myArray.length)

// break and continue
// break 
// for (let index = 0; index < 20; index++) {
//     if(index == 5 ){
//         console.log(`${index} detected`)
//         break // direct loop ke bahr
//     }    
//     console.log(index)
// }

// continue
for (let index = 0; index < 20; index++) {
    if(index == 5 ){
        console.log(`${index} detected`)
        continue // direct loop ke bahr
    }    
    console.log(`value is ${index}`)
}

