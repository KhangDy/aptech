// 1.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, world!");
    }, 2000)
})
promise.then(console.log) 



