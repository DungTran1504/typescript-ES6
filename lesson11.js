"use strict";
//viết Rest Parameter theo javascript
var displayColors = function () {
    for (var i_1 in arguments) {
        console.log(arguments[i_1]);
    }
};
displayColors('Red');
displayColors('Red', 'Green');
displayColors('Red', 'Green', 'Blue');
//viết rest parameter theo typescipt
var viewColor = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    for (var i_2 in colors) {
        console.log(colors[i_2]);
    }
};
var message = 'Message';
viewColor(message, 'Red');
viewColor(message, 'Red', 'Green');
var mang = ['Red', 'Green', 'Blue'];
viewColor(message, mang);
