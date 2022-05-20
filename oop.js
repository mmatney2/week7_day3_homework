//objecy prototypes ES - 5
function Car(make, model, year){ //want to use this not arrow function 
    this.make = make; 
    this.model = model;
    this.year = year;//this instead of self...this instance

    this.first_letter_model=function(){
        return this.model[0];
    }
    //methods 
    this.printInfo = function(wheels=0, color){
        console.log(`this is a ${this.year} ${this.make}, ${this.model} 
    and has ${wheels}wheels and is color ${color}`)
        
    }
}

let myCar = new Car('Toyota', 'Tundra', 2000)
console.table(myCar)
console.log(myCar.make)
console.log(myCar.something="something else")
myCar.year = 2010
console.table(myCar)

myCar.printInfo()
myCar.printInfo(4)

myCar.drive = function(){console.log('VROOOOOOOOOOOOOOOOM!!!')}
myCar.drive()

Car.prototype.kill = "kill"
console.log(myCar.kill)

String.prototype.firstLetter = function(){return this[0]}

console.log("Jerry".firstLetter())

// ES 6
class Human{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    returnInfo(){`walking: ${this.walking} Name: ${this.name} \nAge: ${this.age} \n ${this.gender}`
                //overroad the true on line 69
    }
}

let wilma = new Human('Wilma', 25, 'Female')
console.log(wilma)
console.log(wilma.returnInfo())

class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender)
        this.walking=walking //bool
    }

    isBabyWalking(){
        if (this.walking){
            return "baby is walking"
        }else{
            return "Baby ain't walkin"
        }
    }
}

let pebbles = new Baby('Pebbles', 1, "female", true);
console.table(pebbles)
console.log(pebbles.walking)
console.log(pebbles.isBabyWalking())
console.log(pebbles.returnInfo())