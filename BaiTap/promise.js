/*
// 1. 
const testLuck = new Promise((resolve, reject) => {
    const isLucky = Math.random() < 0.5;
    if (isLucky) {
        resolve('May mắn');
    } else {
        reject('Không may mắn');
    }
})

// 2.
const asyncFunction = async () => {
    try {    
        const finalResult = await testLuck;
        console.log(finalResult);
    } catch (error) {
        console.log(error);
    }
}
setTimeout(asyncFunction, 5000)
*/


//======================================================================================================================================================
//bai thay sua

/* BAI 1
const testLuck = new Promise((resolve, reject) => {
    if(Math.random() < 0.5) {
        resolve("Lucky winner")
    } else{
        reject(new Error("Unlucky!"))
    }
})

testLuck.then(message => {console.log(message)})
        .catch(error => {console.error(error)})
*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
/* BAI 2
const newPromise = new Promise((resolve,reject) => {
    setTimeout(() => resolve("All done !"), 5000);
});
// creating an asynchronour function using an arrow expression and saving it to a the variable asyncFunction
const asyncFunction = async() => {
    //awaiting the promise to resolve and saving result to the variable finalResult
    const finalResult = await newPromise;
    console.log(finalResult)
}

asyncFunction();
*/
//----------------------------------------------------------------------------------------------------------------------------------------------
/* BAI 3
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello, world!"), 2000);
});
promise.then(message => {console.log(message)})
*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
/*
const handle =() => {
    return Promise.resolve(true)
}

handle()
.then((res) => {
    throw new Error("error")
}) 
.catch((e) => {
    console.log("chac chan nhay vo day")
})
.then((v) => {
    console.log(v)
    console.log("nhay vao day vi truoc do da catch, va gia tri v la undefined vi trong catch khong return gi ca")
})
.catch((e) => {
    console.log(e)
})
*/

const handle2 = async () => {
    return Promise.resolve("hello")
}

const handle4 = (value) => {
    return Promise.resolve("handle4" + value)
}

//callback hell khong nen viet bang cach nay
handle2().then(res => {
    handle4(res).then(res => {
        console.log(res)
    })
})

/*
// viet bang cach khac han che callback hell
handle2()
.then((res) => {
    return handle4(res)
})
.then((res) => {
    console.log(res)
})
*/

const promise1 = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1'), 2000)
  })

  const promise2 = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2'), 1000)
  })

  const promise3 = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3'), 1500)
  })

  Promise.all( [promise1(), promise2(), promise3()])
  .then((result) => {
    console.log('result: ', result)
  })
  .catch((error) => {
    console.log('error: ', error)
  })