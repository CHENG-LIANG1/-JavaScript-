
## this 指向函数的调用者

## method - a function that is a part of an Object 对象中的方法
this -> obj

```js
const video = {
    title: 'a',
    play() {
        console.log(this);// obj
    }
}

video.stop = function() {
    console.log(this); // obj
}

video.stop();

```


## function - a normal function 普通函数
this -> global (window, global)

```js
function Video() {
    console.log(this);
}
Video(); // window()

// new 一个 obj，会让 this 指向一个空 obj
const v = new Video('b'); // obj
```



```js
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach( function(tag) {
            console.log(this.title); // undefined
            console.log(this); // window
        }); // 里面这个匿名函数是一个普通函数，调用者是 window
    }
}

```