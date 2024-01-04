// // vong for
// for (let i = 0; i < 100; i++) {}
// console.log("Done")


/*
const promiseFunc = () => 
    new Promise((resolve, reject) => {
    console.log("Executing promise")
    resolve("success")
})

promiseFunc().then((result) =>{
    console.log("Promise resolved:", result)
})

console.log("promise created")
*/

/*
const getData = new Promise((resolve, reject) => {
    //setTimeout se duoc goi ngay lap tuc
    setTimeout(()=> {
        // con callback trong nay sau 1s se chay
        console.log("setTimeout")
        resolve("1")
    },1000)
})

getData.then((res) => {
    console.log(res)
})
*/

/*
const p = Promise.reject(100)

p.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log("error", err)
})
*/

/*
//Mot async function se return mot promise
const handle = async() => {
    return "hello"
}
handle().then((res) => {
    console.log(res)
})

handle2 = async() => {
    return Promise.resolve("hello1")
}

handle2().then((res) => {
    console.log(res)
})
*/

/*
const handle3 = () => {
    return Promise.resolve("hello")
}

handle3().then((res) => {
    return res + " world"
}).then((res) => {
    console.log(res)
})
*/

const handle3 = () => {
    return Promise.resolve("hello")
}

handle3().then((res) => {
    return Promise.reject(res + " world")
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log("error", err)
})