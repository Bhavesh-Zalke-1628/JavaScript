// const parent  = document.querySelector("#parent")
// console.log(parent)
// console.log(parent.children)
// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML)    
//     parent.children[i].style.color = "yellow"
// }

// console.log(parent.firstElementChild.innerHTML)
// console.log(parent.lastElementChild.innerHTML)


// const newDay = document.querySelector('.day')
// console.log(newDay.parentElement)
// console.log(newDay.parentNode)
// console.log(newDay.nextElementSibling)

// console.log("nodes :- ",parent.childNodes)



//  // node list 

const div =  document.createElement('div')

console.log(div)
div.className = 'main'
div.id = Math.round(Math.random()*10)
div.setAttribute=('title ','generated title')
div.style.backgroundColor = 'green'
div.style.padding = '10px'
div.style.margin = '10px'
// div.innerText = "I am Bhavesh Zalke"
const addText  = document.createTextNode("I am Bhavesh Zalke")
div.appendChild(addText)
document.body.appendChild(div)