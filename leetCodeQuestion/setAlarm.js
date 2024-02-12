const {JSDOM} = require(`jsdom`);
const dom = new JSDOM(`<!DOCTYPE html><html lang="en"><body><div id="output"></div><button id="set-alarm">Set Alarm</button></body></html>`);
global.document = dom.window.document;
global.window = dom.window;


const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");
const name    = document.querySelector("#name");
const delay  = document.querySelector("#delay");

function setAlarm(){
    setTimeout(() =>{
        output.textContent = "Wake up";
    }, 1000);
}



function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error("Alarm delay must not be negative");
        }
        setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        }, delay);
    });
}

button.addEventListener("click", () =>{
    alarm(name.value, delay.value)
        .then((message) => (output.textContent = message))
        .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
});


// console.log(alarm("Joy", 100));