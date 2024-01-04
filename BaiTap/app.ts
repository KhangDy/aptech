//basic type
let car = "toyota"
let bike: string
bike = "Winner"
// bike = 150 bi loi

//number
let num: number = 10
//boolean
let isLoading: boolean = false
let body = undefined
let footer: null
let person: any
person =10
person = "something"
person = false
//**************************************************************
//object
let house : {
    address: string
    color?: string
} ={
    address : " ",
    
}
house.address = "HCM"
//***************************************************************
//Array
let products : any[] = []
products.push(1)
products.push("VN")

//string []
let names = ['alex', 'ben']
let addresses: string[] = []
//addresses.push(123)
addresses.push("DN")

//number []
let numbers : number[]=[]
numbers = [1,2,3,4,5]

//object array

let people: {
    name: string
    age: number
}[] =[]

people.push({
    name: 'Jonh',
    age: 30
})

//function
const sum = (num1: number, num2: number) => {
    return num1 + num2
}

sum(1,2)

const sub: (num1: number, num2: number) => number = (
    num1: number,
    num2: number
) => num1 - num2
const handle = () => (console.log(123))

//union

let price: string | number | boolean
price = "10"
price = 20
price = false
let body1: {name: string} | {fistname: string} = {
    fistname: "dy"
}

//enum
enum Sizes {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL'
}
let size = Sizes.S

//Class