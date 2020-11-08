
let b = 12;
console.log(a);

//*/      if/Else    switch/case    ternary operator

const age = 21;

if (age >= 18) {
    alert('You are welcome!');
} else {
    alert('You need to grow up!')
}

switch (age) {
    case age >= 18:
        alert('You are welcome!');
        break;
    
    default:
        alert('You need to grow up!');
        break
}

age >= 18 ? alert('You are welcome!') : alert('You need to grow up!');

//*/      Loops in JS

//  While
//  DO-WHILE
//  FOR
//  FOR-OF
//  FOR-IN

const array = [1, 2 ,3, 4,'qwerty', 6, 10, 25];
for (let index = 0; index < arr.length; index++) {
    console.log(array(index));
}

const username1 = {
    name: 'Misha',
    age: '21'
}

//* for in - для проходження по об'єктах
for (const key in username1) {
    if (username1.hasOwnProperty(key)) {    // рекомендується завжди робити таку перевірку
    const element = username1[key];         // що це Property буде тим що ми оголосили (не від наслідування і тд.)
    console.log(element);
    }
}

while (array.length > 3) {
    array.pop();
    console.log(array);
}
