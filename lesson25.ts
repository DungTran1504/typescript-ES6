//Kiểu array

let array1 : string[]=["One","Two","Three"];
let array2: number[]=[1,2,3];
let array3 : any[]=[10,"Hello",true];
let array4: Array<string> =["Four","Five","Six"];

//truy xuất mảng
console.log(array1[0]);

//Kiểu tuple
let student :[string,number];
student =["Nguyễn Văn A",20];
console.log(student);
student[0] ="TPHCM";
console.log(student[0]);
student[3]=1;
console.log(student[3]);