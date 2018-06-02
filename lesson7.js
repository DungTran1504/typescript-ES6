"use strict";
var isDone = false;
console.log(isDone);
var number2 = 1;
console.log(number2);
var color = 'blue';
console.log(color);
var fullName = "Trần Thị Thu Dung";
var sentences = "Hello " + fullName;
var sent = "Hello " + fullName;
console.log(sentences);
console.log(sent);
//kiểu enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
console.log(Color.Red);
//kiểu mảng
var array = [1, 2, 3];
console.log(array);
var list = [1, 2, 3];
console.log(list);
//kiểu tuple
var x;
x = ["hello", 1];
//not OK
//x=[10,"hello"];
console.log(x[0].substr(0));
//phần tử thứ 2 là số
//console.log(x[1].substr[1]);
x[3] = "world";
console.log(x[3]);
console.log("x5 =" + x[1].toString());
//x[6]= true;
// kiểu type assert (giống ép kiểu trong c#)
var someValue = "this is string";
var strLeng = someValue.length;
//hoặc khai báo tương đương
var strLeng1 = someValue.length;
console.log(strLeng);
console.log(strLeng1);
//kiểu any
var notSure = 4;
notSure = "có thể là chuỗi";
notSure = false;
console.log(notSure);
