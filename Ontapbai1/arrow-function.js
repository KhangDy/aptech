// function hello(){
//     //console.log("Hello")
//     return "Hello"
// }

// const hello = () => {
//     return "Hello"
// }

// const hello = () => [1,2].map((item) => item *2)

// //hello()
// const result = hello()
// console.log(result)

//this dai dien cho doi tuong goi den no
function getName1() {
    console.log(this)
}

const getName2 = () =>{
    console.log(this)
}

const user ={
    name: "John",
    getName: getName1,
    getName2: getName2
}

const car ={
    name: "BMW",
    getName: getName1,
    getName2: getName2
}

// user.getName()
// car.getName()
user.getName2()