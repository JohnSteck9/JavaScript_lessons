//*/            Work with DOM
//*//   Accessing DOM nodes
// - getElementByid()
// - getElementByClassName()
// - getElementsByTagName()
// - querySelector(), querySelectorAll()
//*//   Managing Nodes
// - innerHTML
// - createElement()
// - appendChild()
// - addEventListener()
// - elem.className = 'string'
// - elem.style = 'string'

//*/            Web Storage API: localStorage & sessionStorage

const drakula = {
    name: 'Count Dracula',
    country: 'Romania',
    wife: 'there were a lot...'
}

// Chrome -> Developer tools -> Application -> Storage
localStorage.setItem("name", "John");

console.log(localStorage.getItem("name"));

localStorage.setItem("num", 3);    // 3 = string


// Запис об'єкту
localStorage.setItem("guest", drakula);
localStorage.setItem("guest", JSON.stringify(drakula));

const myGuest = localStorage.getItem("guest");
console.log(myGuest.wife);  // => undefined

const myGuest = JSON.parse(localStorage.getItem("guest"));


localStorage.removeItem("name");
localStorage.clear();       // очистити весь localStorage


//* sessionStorage
sessionStorage.setItem("sessionKey", "TOP SECRET");
// сесійне сховище зберігається лише в той час вкладка відкрита

console.log(sessionStorage.getItem("sessionKey"));

//*/  ******** Cookie ********

// сховище даний на локалці користувача
// вони вирішують проблему як запам'ятати інфу про користувача для серверу
// відправляються коли відправляється REQUESTs і RESPONSE з сервера
// прив'язані до домену
document.cookie = "user=Nazarko";

document.cookie = `nick=ngorokhivskiy; expires=${new Date(2021, 11, 4).toUTCString()}` 
// автоматично видалиться з локалки в 2021р

document.cookie = "token=something_very_wrong";
document.cookie = "token=; expires=Thu, 01 Jan 2020 00:00:00 UTC"

console.log(document.cookie);   // виведення cookie


// передача cookie при кожномо http request (GET по дефолту)
// Dev Tools -> Network
fetch('127.0.0.1/hello')
fetch('https://jsonplaceholder.typicode.com/todos/1');

