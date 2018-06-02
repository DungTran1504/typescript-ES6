"use strict";
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 1000);
};
//fix dùng từ khóa let
for (var i_1 = 1; i_1 <= 5; i_1++) {
    _loop_1(i_1);
}
console.log("=======================");
//fix dùng hàm IIF
for (var i = 1; i <= 5; i++) {
    (function (x) {
        setTimeout(function () {
            console.log(x);
        });
    })(i);
}
