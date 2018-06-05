"use strict";
var p6 = {
    fname: "Dung",
    lname: "Tran"
};
var p7 = {
    fname: "Suong",
    lname: "Tran",
    age: 30
};
console.log(p7.fname + p7.lname + p7.age);
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
