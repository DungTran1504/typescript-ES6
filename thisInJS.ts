var nameTest = "Peter";
var HocSinh = {
    nameTest: "John",
    printName: function () {
        console.log(this.nameTest);
    }
}

//var ten = HocSinh.printName();
//this trong callback
$(document).ready(function () {
    //gọi hàm này có funtion() bên trong vẫn tham chiếu được HocSinh
    // $('button').click(function () {
    //     HocSinh.printName();
    // }
    // );

    /*hàm này this đang trỏ tới button => name =""
    //$('button').click(HocSinh.printName);
    //sửa bằng cách dùng bind
    $('button').click(HocSinh.printName.bind(HocSinh));*/


    /*Con trỏ this trong trường hợp gán hàm cho 1 biến khác 
    var printHSName = HocSinh.printName.bind(HocSinh);
    //console.log(printHSName());
    printHSName();
    console.dir(printHSName);*/

    /*Con trỏ this trong hàm mượn */
    var gameController = {
        scores: [10, 15, 20],
        avgScore: null,
        players: [{
            name: "Tommy", playID: 987, age: 23
        },
        { name: "Pau", playID: 87, age: 33 }
        ]
    };

    var appController={
        scores:[30,40,50],
        avgScore :null,
        computeAvg:function(){
            var sumOfScores =this.scores.reduce(function(prev,cur,index,array){
                return prev+ cur;
            });
            this.avgScore=sumOfScores/this.scores.length;
        }
    };

    appController.computeAvg.apply(gameController);
    console.log(gameController.avgScore);
});
