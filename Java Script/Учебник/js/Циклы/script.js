"use strict";

// ЦИКЛЫ    3 способа

    // while
    let num = 50;
    while (num <= 55) {
        console.log(num);
        num++;
    }

    // do
    let num = 50;
    do {
        console.log(num);
        num++;
    }
    while (num <= 55);

    // for
    let num = 50;
    for (i = 1; i <=10; i++) {
        console.log(num);
        num++;
    }

    // break ПРЕРЫВАЕТ
    for (i = 1; i <=10; i++) {
        if (i === 6) {
            break;
        }
        console.log(i);
    }

    // continue ПРОПУСКАЕТ
    for (i = 1; i <=10; i++) {
        if (i === 6 ) {
            continue;
        }
        console.log(i);
    }


