"use strict";
var displayMauSac = function (messsageSpread) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    for (var i_1 in colors) {
        console.log(colors[i_1]);
    }
};
var messsageSpread = 'Message Spread';
var MauSacs = ['Cam', 'Nâu', 'Xanh lá'];
displayMauSac.apply(void 0, [messsageSpread].concat(MauSacs));
