"use strict";
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
        console.log("Hello" + this.name);
    }
    Person1.prototype.run = function () {
        console.log("Person is running");
    };
    Person1.talk = function () {
        console.log("Person is talking");
    };
    return Person1;
}());
var p = new Person1("Dung");
p.run();
Person1.talk();
