const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

const a = alphabet[0]
const b = lphabet[1]

const [a,b] = alphabet //first and second element
const [a,,c] = alphabet //first , skip second, then third element
const [a,,c,...rest] = alphabet //first, skip second, third and rest

const newArray = [...alphabet, ...numbers] //spread alphabet elements then number elements

//or

const newArray = alphabet.concat(numbers)

function sumAndMultiply(a,b) {
    return [a+b, a*b, a/b]
}

const [sum, multiply, division = 'No division']= sumAndMultiply(2,3)

console.log(sum)
console.log(multiply)

console.log(a);
console.log(b);
console.log(c);


//object destructuring

const personOne = {
    name:'Kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

const personTwo = {
    name: 'Sally',
    age: 32,
    favoriteFood: 'Watermelon',
    address: {
        city: 'somewhere else',
        state: 'another one of them'
    }
}

const {name: firstName = 'John', address : {city}, ...rest} = personTwo

console.log(firstName);
console.log(age);
console.log(rest);
console.log(city);

const personThree = {...personOne, ...personTwo} ///puts all info for person one unless persontwo also has it, in which case it gets overwritten

//anything not set goes to default

function printUser({name, age, favoriteFood = 'watermelon'}){
    console.log(`Name is ${name}. Age is ${age}. Food is ${favoriteFood}`)
}

printUser(personTwo)