
// setTimeout 比 promise 快
// https://juejin.cn/post/6844903655473152008

new Promise( function (resolve, reject) {
    resolve();

    setTimeout(() => {
        console.log(1);
    }, 0);
    console.log(2);
}).then(
    function(){
        console.log(3)
    }
)
.then(
    function(){
        console.log(4)
    }
)

console.log(5)
