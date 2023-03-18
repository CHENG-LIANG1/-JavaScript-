// https://www.bilibili.com/video/BV1Ug411F7fZ/?vd_source=20a7f5c80042c4cf8ab9729992090985

const steven = {
    name: 'Steven',
    phoneBattery: 70, 
    charge: function (level1, level2) {
        this.phoneBattery = level1 + level2;
    }
}

const becky = {
    name: 'Becky',
    phoneBattery: 30
}

console.log(steven);
steven.charge(100);
console.log(steven);

console.log(becky);
steven.charge.call(becky, 30, 40); // 
console.log(becky);

console.log(becky);
steven.charge.apply(becky, [30, 50]); // 接收参数变成了数组
console.log(becky);

console.log(becky);
const beckyCharge = steven.charge.bind(becky);
beckyCharge(40, 50);
console.log(becky);