
"use strict";

function first() {
setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();




function learnJS(lang, call) {
    console.log(`Я учу: ${lang}`);
    call();
    
}
function done(){
    console.log('Я прошел этот урок'); 
}

learnJS('DDDD', done);
    
