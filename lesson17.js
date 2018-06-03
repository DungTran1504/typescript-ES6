"use strict";
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log("Person is running");
    };
    return Person;
}());
var p1 = new Person();
p1.run();
