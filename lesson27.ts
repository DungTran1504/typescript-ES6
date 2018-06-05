interface IPerson{
    fname :string,
    lname: string,
    age? : number
}

var p6 : IPerson = {
    fname :"Dung",
    lname : "Tran"
}

var p7 :IPerson={
    fname :"Suong",
    lname :"Tran",
    age :30
}

console.log(p7.fname + p7.lname + p7.age);

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);