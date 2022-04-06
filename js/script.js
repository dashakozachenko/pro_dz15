"use strict";

const num = +prompt ( 'Введите число ' );
let i = 2;
if ( num <= 1){
    console.log ( NaN );
}else{
    for (; i <= num; i++) {
        if (num % i === 0)
            break;
    }
    if ( i === num ){
        console.log(`Делителем является само число: ${num}.`);
    }else{
        console.log(`Наименьший делитель: ${i}.`)
    }
}

