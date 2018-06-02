let isDone :boolean = false;
console.log(isDone);

let number2: number = 1;
console.log(number2);

let color : string ='blue';
console.log(color)

let fullName :string = "Trần Thị Thu Dung";
let sentences : string=`Hello ${ fullName }`;
let sent :string = "Hello " + fullName;
console.log(sentences);
console.log(sent);

//kiểu enum
enum Color{Red,Blue,Green};
console.log(Color.Red);

//kiểu mảng
let array: number[]=[1,2,3];
console.log(array);

let list : Array<number> = [1,2,3];
console.log(list);

//kiểu tuple
let x: [string,number];
x=["hello",1];

//not OK
//x=[10,"hello"];
console.log(x[0].substr(0));

//phần tử thứ 2 là số
//console.log(x[1].substr[1]);

x[3]= "world";
console.log(x[3]);
console.log("x5 =" + x[1].toString());
//x[6]= true;


// kiểu type assert (giống ép kiểu trong c#)
let someValue : any ="this is string";
let strLeng :number = (<string>someValue).length;
//hoặc khai báo tương đương
let strLeng1 : number = (someValue as string).length;

console.log(strLeng);
console.log(strLeng1);

//kiểu any
let notSure : any = 4;
notSure = "có thể là chuỗi";
notSure =false;

console.log(notSure);