"use strict";
//gán giá trị mặc định cho tham số trong hàm
var p = function () { return 2; };
var getBonus = function (value, tax, salary) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = value * 10; }
    if (salary === void 0) { salary = p(); }
    console.log(value + tax + salary);
    console.log(arguments.length);
};
getBonus();
getBonus(20, 20);
getBonus(undefined, 30);
