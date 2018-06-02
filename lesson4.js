"use strict";
//sử dụng từ khóa let để khai báo biến chỉ có phạm vi sử dụng trong khối if else
//bên ngoài không truy cập được
function Hello(name) {
    var greet;
    if (name === "Dung") {
        greet = "Hello Dung";
    }
    else {
        greet = "Hello no name";
    }
    console.log(greet);
}
Hello("Dung");
// biến a sẽ = 10 do biến var không phụ thuộc vào block code
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
}
console.log(a);
console.log(b);
