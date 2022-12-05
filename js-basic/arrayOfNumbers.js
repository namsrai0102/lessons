let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let max = 0;
for(let i = 0; i<arrayOfNumbers.length; i++){
    if (max < arrayOfNumbers[i]){
        max = arrayOfNumbers[i];
    }
}
console.log(`max utga ni :${max}`);

let min = max;
for(let i = 0; i<arrayOfNumbers.length; i++){
    if (min > arrayOfNumbers[i]){
        min = arrayOfNumbers[i];
    }
}
console.log(`min utga ni :${min}`);
let sum = 0;
let i = 0;
while(i < arrayOfNumbers.length){
    sum += arrayOfNumbers[i]
    i++;
}
console.log(`Niilber ni: ${sum}`);
console.log(arrayOfNumbers);
arrayOfNumbers.unshift(12);
console.log(arrayOfNumbers);
arrayOfNumbers.push(12);
console.log(arrayOfNumbers);
