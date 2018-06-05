"use strict";
//khai báo contructor trong class
//cách 1
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    return Person;
}());
//Cách 2
var Person5 = /** @class */ (function () {
    function Person5(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    return Person5;
}());
var p5 = new Person5("Thu Dung", "Tran Thi");
console.log(p5.fname + " " + p5.lname);
