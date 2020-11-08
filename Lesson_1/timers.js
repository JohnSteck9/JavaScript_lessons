// setTimeout(() => {
//     console.log("I am kind of late");
// }, 1000);




const timeoutID = setTimeout(() => {
    console.log("I am kind of late");
}, 1000);

clearTimeout(timeoutID);


let i = 0;

const intervalID = setInterval(() => {
    i++;

    console.log("Hi, I am Rick " + i);

    if (i>10) clearInterval(intervalID);
}, 1000);

// clearInterval(intervalID);

// EcmaScript і JS різняться середовищем в якоу вони виконуються
//JS трохи ширша версія ES

