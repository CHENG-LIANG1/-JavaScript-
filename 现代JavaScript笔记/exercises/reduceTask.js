
const numbers = [1, -1, 2, 3];

let sum = 0;
for (let n of numbers) {
    sum += n;
}

console.log(sum);

const sum2 = numbers.reduce((accumulator, currentValue) => {
    // accumulator is exactly the sum 
    // in each call, currentValue is 1, -1, 2, 3
    return accumulator + currentValue;
}, 0); 

// 如不提供初始值，取数组的第一个值

console.log(sum2);
