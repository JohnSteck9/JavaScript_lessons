//*/                Types
// number 
let n = 10;
let floatNumber = 10.5;

//string
let str = 'hi';
let str2 = "HOLA";
let str3 = `hello ${str2}`;

//boolean
let isBool = true || false;

//undefined
let absent = undefined;

//null взагалі нема елемента (навіть посилання)
let notExist = null;

//*/           Objects and Arrays

const arr = new Array(); //this is ok

const arr2 = []; // and this is ok - recommend

var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = '1969';

const arr0 = [1, 3, 5, false, {name: 'Brasil'}, undefined, null];

// Object
const user = {
    name: 'Basil',
    surname: 'Hallward',
    age: 41
};

//__proto__: Object
const student = {};

student.name = 'Max';

console.log(student);

//*/           const    let    var
//  keyword             | const |   let |   var |
//  global scope        |   NO  |   NO  |   YES |
//  function scope      |   YES |   YES |   YES |
//  block scope         |   YES |   YES |   NO  |
//  can be reassigned   |   NO  |   YES |   YES |

// var можна міняти (рідко використовується юо це глобальна змінна)
// при var декларується (викликається спочатку але не передаємо значення)
// а тип даних = undefined


// let змінна можемо міняти 
// let a = {};
let a = 12;
// let a = 'abc';
console.log(a);

const func1 = () => {
    let name = 'Bob'
};

// const не зможна змінти тип але якщо це об'єкт то можна міняти його значення і оперувати значеннями
// const user = {
//     name: 'Basil',
//     surname: 'Hallward',
//     age: 41,
// };


//*/        Function Declaration    vs    Function Expression     vs    Arrow Function
// 3 види виклику ф-Ї

// Difference between them is that Function Declaration is created by JS
// interpreter before code is executed, but Function Expression NOT

//* Function Declaration

function omega() {
    return 'hello world'
}

//* Function Expression

const delta = function(x,y) {
    return x + y;
}

//* Arrow Function ES6
// зсилаються на глобальний this
const myFavFunc = () => {
    return 'holllaaa'
};

const myFavFunc1 = () => 'holllaaa';

console.log(myFavFunc());
console.log(myFavFunc1());

const greeting = (name, age, university) => `Hi, my name is ${name}, a am ${age} old, and I stydy in ${university}.`
console.log(greeting());