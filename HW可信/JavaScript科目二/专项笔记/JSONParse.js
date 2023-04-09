
// https://www.bilibili.com/video/BV1b3411f7R7/?vd_source=20a7f5c80042c4cf8ab9729992090985

// 从上到下，从里到外

JSON.parse('{"1", 1, "2", 2, "3":{"4": 4, "5": {"6": 6}}}', function(k, v) {
    console.log(k);
    return v;
})

let obj = {
    "1" : 1,
    "2" : 2,
    "3" : {
        "4" : 4,
        "5" : {
            "6" : 6
        }
    }

}