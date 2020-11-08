//*/      First-class functions (functions as an object)
// ALL functions in JS behave like objects
//      Which means that functions can ...
//      - Be stored in a variable;
//      - Be passed as arguments to functions;
//      - Be returned by functions;
//      - Be srored in some data structure;
//      - Hold their own priperties and methods.

//  Функціональна парадигма програмування

function speak(string) {
    console.log(string);
}

speak('opachki');

const talk = speak;
talk('opaaa');

const returnFunc = (fn) => {
    return fn;
};

const talk2 = returnFunc(speak);
console.log(talk2);

const myFuncArray = [speak, talk];
console.log(myFuncArray[1]);

speak.lol = 'kek';
console.log(speak.lol);

setTimeout
console.log(setTimeout);

//*/      Scope, Closure (замикання)

// ------- 1 -------
// кожна ф-я коли замикається має прихований параметер -> scope
// в якому зберігаються всі змінні які були присутні в даний момент 
// в зовнішньому середовищі і в зовнішніх ф-ях в який вона була виконана
let name = "Nazar";

function speak3() {
    console.log(`I say ${name}`);
}
speak3()
name = "Tarasyk";
speak3()
// коли викликається ф-я вона створює всередині себе об'єкт, яка містить ті змінні 
// які були в зовнішньому середовищів момент її виклику
// ті змінні які є в зовнішньому середовищі наз. //* замиканням


// ------- 2 -------

// outerFunction - зонішня ф-я (батьківська)
// outerVar - зовнішня змінна як параметер
// anotherOuter - інша зміннна всередені outerFunction
// innerFunction - внутрішня ф-я як return значення з параметром innerVar, 
// вона також використовує зміння із зовнішнього середовища (параметер ф-ї (змінні і функції яка її викликала))

function outerFunction(outerVar) {
    const anotherOuter = "Hallo";

    return function innerFunction(innerVar) {
        console.log(`Outer variable: ${outerVar}`);
        console.log(`Second outer variable: ${anotherOuter}`);
        console.log(`Inner variable: ${innerVar}`);
    }
}

const myFunction = outerFunction("Jackson");

myFunction("Michael");

//*/      "This" keyword in JS
// this - is a  reference to current execution context
// and this is strange ...
// soooo, please, avoid it in most of the cases (exception is OOP approach)

// this - це посилання на теперішнє виконання коду
const dd = '~~~~~~~~~~~~~~~~~~ This ~~~~~~~~~~~~~~~~~~';
// ============= 1 =============
console.log(dd);

function printThis() {
    console.log(this);
};

printThis();

// ============= 2 =============

// наші функції можуть поводитися як конструктор об'єктів

function printThi2() {
    console.log(this);  // this посилається на об'єкт який створюється
};
// буде посилатися на printThi2 ф-ю (об'єкт який створюється)
// ф-я була викликана в вежимі конструктора і відповідно 
// this там не посилається на теперішній контекст а посилається на об'єкт

const printObj = new printThis2();

// ============= 3 =============

const object1 = {
    name: "object1",
    hello() {
        console.log(this);
    }
}

const object2 = {
    name: "object2",
    hello: () => {
        console.log(this);
    }
}

const object3 = {
    name: "object3",
    hello: function () {
        console.log(this);
    }
}

object1.hello();
object2.hello();
object3.hello();

// ============= 4 =============
// call | apply
// *** in the console ***
const obj1 = { x: "Dua"};

function addLipa(address) {
    console.log(`${this.x} - Lipa, ${address}`);
}

addLipa.call(obj);
addLipa();

addLipa.call(obj, 'Lviv');

addLipa.apply(obj, ['Lviv']);