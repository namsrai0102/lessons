let coun = 1;
while (coun <= 10) {
console.log(coun);
coun = coun + 1;
}



let count = 0;
while (count <= 10) {
    if (count % 2 !== 0)
    {
        console.log(count);
    }
    count += 1;
}

let cou = 0;
while (cou <= 10) {
    if (cou % 2 === 0)
    {
        console.log(cou);
    }
    cou += 1;
}
let co = 1;
while (co <= 100) {
co = co + co;
console.log(co);
}


let a = parseInt(prompt(`Ta toogoo oruulna uu?`));
let isPrime = true;
if (a === 2){
    console.log(`${a} mon `);
} else {
    let i = 2;
    while(i < a) {
        if (a % i ===0)
        {
            isPrime = false;
            break;
        }
        i++;
    }
    if(isPrime){
        console.log(`${a} bol mon`);
    } else {
        console.log(`${a} to bish`);
    }
}