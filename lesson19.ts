class Person{
    constructor(name){
        this.name = name;
        console.log("Hello " + name);
    }
    getId(){
        return 10;
    }
}

class Employee extends Person{
    constructor(name){
        super(name);
        console.log("Kế thừa" + name);
    }

    getId(){
        return super.getId();
    }
}

let p2= new Person("Dung");
let p3 = new Employee("Sương");
console.log(p3.getId());