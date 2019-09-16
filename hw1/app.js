////hw 1




/* let x = 2 + '2'; // number and string 22

let x = 2 + 2 + '2'; //two numbers and string 42

let x = 2 + true; //true is 1 and false is 0

let x = 2 + true + '2'; //32

let x = true + '2'; //true2

console.log(x);

let x = Number('Hello'); //NaN not a number

let x = Boolean (5); //All numbers except 0 give true

let x = Boolean ('Hello'); //All strings except an empty, undefined, or null give true

let x = '';
if((x !== undefined) || ( x !== null) || (x !== 0)){

}

if([]){

}// all objects are true

console.log(x); */





//////hw 2

const color = 'red';

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
    console.log('color is blue');
    break;
    default:
        console.log('color is not red or blue');
}



switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

console.log(`today is ${day}`);

