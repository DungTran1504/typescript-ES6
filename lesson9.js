"use strict";
var employee = {
    id: 1,
    greet: function () {
        //console.log(this.id);
        var seft = this;
        setTimeout(function () {
            console.log(seft.id);
        }, 1000);
    },
    time: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.id);
        }, 1000);
    }
};
employee.greet();
employee.time();
