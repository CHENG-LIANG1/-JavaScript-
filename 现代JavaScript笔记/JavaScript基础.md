
# 外部脚本

```js
<script src="path/to/script.js">  </script>
```

```js
<script src="file.js">
    alert(1); // 此内容会被忽略，因为设定了 src
</script>
```

## 8 种数据类型 (7 种原始类型 + 1 种引用类型)
1. Number
2. BigInt
3. Boolean
4. String
5. undefined
6. null
7. Symbol
8. [引用类型] Object

# 交互
1. alert
2. prompt
```javascript
let result = prompt(title, 可选参数 default);

let age = prompt("How old are you?" , 20);
alert(`You're ${age} years old`);
```
3. confirm
```javascript
let isBoss = confirm("Are you the boss?");
alert(isBoss); // 返回 true 如果「确定」按钮被按下
```

# 类型转换
```javascript
// 字符串转换
let value = true;
alert(typeof value);  // boolean

value = String(value);
alert(typeof value);  // string

// 数字型转换
alert("6" / "2"); // 3

let str = "123";
alert(typeof str); // string

let num = Number(str); // number 123
alert(typeof num); // number

let age = "a string";
alert(age); // NaN 转换失败

// 布尔型转换
// 0, null, undefined, NaN, "" 为 false
// 其余为 true
alert(Boolean("hello")); // true
alert(Boolean("")); // false
```
