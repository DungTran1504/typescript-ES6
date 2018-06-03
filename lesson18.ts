class Person1 {
    constructor(name) {
        this.name = name;
        console.log("Hello" + this.name);
    }

    run() {
        console.log("Person is running");
    }

    static talk() {
        console.log("Person is talking");
    }

}

let p = new Person1("Dung");
p.run();
Person1.talk();
