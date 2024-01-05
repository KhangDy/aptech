type Handle = () => Promise<string>
const fullname =" Khang Dy"
const handle: Handle = () => Promise.resolve(fullname)
console.log(fullname)