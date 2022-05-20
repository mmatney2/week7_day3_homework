let dak = {
    name:"Dak",
    age:77,
    favColor:'blue'
}

console.table(dak)
console.log(dak['age'])
console.log(dak.age)

let myKey='age'
console.log(dak.myKey) //NO!!!
console.log(dak[myKey])

dak.isGoodCoder=false;
console.table(dak)
dak.isGoodCoder=true;
console.table(dak)

myNewKey="hairColor"
dak[myNewKey]='brown'
console.table(dak)


let person2 = {
    name: "Max",
    age:31,
    prog_languages:['JavaScript','Python','C++', 'Java'],
    fav_color: "Blue",
    teams:[
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball:['Chicago Bulls','Chicago Sky'],
            soccer:['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball:'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United','Liverpool']
        }
    ]
}

// print "Blue"
console.log(person2['fav_color'])
console.log(person2.fav_color)

// print C++
console.log(person2.prog_languages[2])

//LA Rams
console.log(person2.teams[1].football)

//Chicage Fire
console.log(person2.teams[0].soccer[0])

// .keys, .values .items in python
console.log(
    Object.keys(person2)
)
console.log(
    Object.values(person2)
)
console.log(
    Object.entries(person2)
)
console.log('============================================================')

// loop through an object ... the old ugly way...
for (let i=0; i<Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i]) //keys
    console.log(person2[Object.keys(person2)[i]]) //values
}
console.log('============================================================same')

// for in loop this loops over objects ES6
for (let key in person2){
    console.log(key)
    console.log(person2[key])
}


shoe={
    name:'Red Nike',
    size:11,
    color:'red'
}

const test =(myObj)=>{
    console.log(myObj.name)
    console.log(myObj.size)
    console.log(myObj.color)
}
test(shoe)

const test1 =({name, size, color})=>{
    console.log(name)
    console.log(size)
    console.log(color)
}
test1(shoe)


let person={
    firstName:"Crystal",
    lastName:"Metheny",
    nickName:"Ol' Dirty Illegitimate Child",
    age: 35,
    height:62
}

let quote = `Here I go, deep type flow,
Jackques Cousteau could never get this low.`

const myFunction=(quote, {firstName, lastName, nickName, age, height})=>{
    let reply = 'Get some plaque or...'
    let myObj ={
        id:2
    }

    console.log(quote)
    console.log(firstName)
    console.log(lastName)
    console.log(nickName)
    console.log(age)
    console.log(height)

    console.group(reply ?? 'buy a toothbrush')

    console.log(myObj?.id ?? 789)
}

myFunction(quote, person)


newPerson = {...person, id:187}
console.log(newPerson)


const myFun2=({firstName, lastName, ...leftover})=>{
    console.log(firstName)
    console.log(lastName)
    console.log(leftover)

}

myFun2(person)

let [a,b, ...leftOver] = [1,2,3,4,5]
console.log(a, '|', b, '|', leftOver )


let testArr=[1,2,3,4]
console.log(typeof testArr) //object
console.log(testArr instanceof Array) //true
console.log(Array.isArray(testArr)) //true
console.log(testArr instanceof Object)//true
console.log(typeof 'hello')//string
console.log(typeof {})//object
console.log('hello' instanceof Object) //False
console.log(null instanceof Object)//false
console.log({key:1} instanceof Object)//true
console.log()
console.log()
if(Array.isArray(testArr)){
    console.log('its an array')
}