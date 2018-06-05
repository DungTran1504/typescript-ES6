//khai báo contructor trong class
//cách 1
class Person{
    public fname : string;
    public lname : string;
    constructor(fname : string,lname: string){
        this.fname = fname;
        this.lname = lname;
    }
}

//Cách 2
class Person5{
    constructor(public fname :string,public lname:string){

    }
}

var p5 = new Person5("Thu Dung","Tran Thi");
console.log(p5.fname + " " + p5.lname);