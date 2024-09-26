// //  IIFE
// It is also known as the anomnous function 
(
    function chai() {
        console.log("Database is connect")
    }
)(); //This semicoln is important for the write more than one iife function in the single code 

// semicolon is  important beacause we want the semicolon at the end of the first iife function 
//  
(
    (name) => {
        console.log(`My name is ${name}`)
    }
)
    ('bhavesh');

(
    (
        () => {
            console.log('Good night')
        }
    )
)
    ();
(
    (
        () => {
            console.log('Good morning')
        }
    )
)
    ()
