for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}

//fix dùng từ khóa let
for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}

console.log("=======================");

//fix dùng hàm IIF
for (var i = 1; i <= 5; i++) {
    (function(x) {
        setTimeout(function () {
            console.log(x);
        })
    })(i);
}