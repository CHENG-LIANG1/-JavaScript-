'use strict'

let greet = {
    text: 'hello',
    sayhi: function() { console.log(this.text); },
    sayBye: function() { console.log("bye"); },
    set: na => {
        this.text = na; // 箭头函数中 this 的指向，指向为 window
    }
}

greet.set('world')

greet.sayhi()
greet.sayBye()

// (greet.text === 'hello' ? greet.sayhi : greet.sayBye)(); // Type Error




// 字符串和数组 相加是字符串 相减是数字
let result = 3 + '7';
console.log(result);  // '37'
console.log(typeof result); // string
result = 3 + '7' - 1;
console.log(result); // 36
console.log(typeof result); // number
result = 3 + '7' - '1';
console.log(result); // 36
console.log(typeof result); // number



const employee = {
    salary: 1000,
    add: () => {
        this.salary += 100; // 箭头函数中 this 的指向，指向为 window
        console.log(this); 
    }
}

employee.add();
console.log(employee.salary);




function printNumber(...args) {
    console.log(typeof args);
    console.log(args);
}

printNumber(100); // [ 100 ]




function appLog() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift('your app name');
    console.log.apply(console, args);
}

appLog('JavaScript');



const video = {
    title: 'a',
    play() {
        console.log(this);// obj
    },
    stop: function() {
        console.log(this); // obj
    },
    pause: () => {
        console.log(this); // window
    }
}

video.play();
video.stop();
video.pause();



var pet = "cat";

switch (pet) {
    case "cat":
        console.log("cat");
    case "dog":
        console.log("dog");
        break;
    case "fish":
        console.log("fish")
        break;
    default:
        console.log("default")
}