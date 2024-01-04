//Class khong phai la object
//Class la template de tao project
class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    getName = () =>{
        return this.name;
    }

    getColor= () =>{
        return this.color;
    }
}

class SuperCar extends Car {
    constructor(name, color, signature){
        super(name, color)
        this.signature = signature
    }
}

const bmw = new Car("BMW", "black");
const toyota = new Car("Toyota", "white");
const ferrari = new SuperCar("Ferrari", "red", "Ferrari");
console.log(JSON.stringify (bmw))
console.log(JSON.stringify (toyota))
console.log(ferrari);