// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

// https://www.youtube.com/watch?v=FFas8cMHVwg



let numbers = [1, 2, 3, 4, 5];

const deleted = numbers.splice(2, 3);

console.log(numbers);
console.log(deleted);


let arr = ['I', 'love', 'JavaScript'];
arr.splice(1, 1, 'am', 'learning');
//         startIndex, deleteCount, things to add...


