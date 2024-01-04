// 2.
function double(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);
        }, 1000);
    });
}
double(10).then(console.log);
