//do biến var trong lệnh if else được hiểu là biến toàn cục
// trong javascript ,biến không phụ thuộc vào block ,có thể lấy giá trị ở ngoài block
function Hello1(name: string) {  
    if (name === "Dung") {
        var greet = "Hello Dung";
    } else {
        var greet = "Hello no name";
    }
    console.log(greet);
}

Hello1("");