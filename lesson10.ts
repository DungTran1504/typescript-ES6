//gán giá trị mặc định cho tham số trong hàm
let p =()=>2;
var getBonus = function(value=10,tax=value * 10,salary= p()){
    console.log(value+tax+salary);
    console.log(arguments.length);
}

getBonus();
getBonus(20,20);
getBonus(undefined,30);
