class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created: ' + this.name);
    }
    register() {
        console.log('====================================');
        console.log(this.name + ' is now registered');
        console.log('====================================');
    }
    payInvoice() {
        console.log('====================================');
        console.log(this.name + ' paid invoice');
        console.log('====================================');
    }
}
let john = new User('John Doe', 'jdoe@gmail.com', 34);
console.log(john.age);
console.log(john.email);
john.register();
/*INHERIT USER CLASS*/
class Member extends User {
    constructor(id, name, email, age) {
        super(name, email, age);
        this.id = id;
    }
    payInvoice() {
        super.payInvoice();
    }
}
let mike = new Member(1, 'Mike Smith', 'mike@gmail.com', 33);
mike.payInvoice();
