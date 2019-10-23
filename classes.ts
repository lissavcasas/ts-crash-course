interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}
 

class User implements UserInterface {
  name: string; //private name
  email: string;
  public age: number;

  constructor(name:string, email:string, age:number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('User Created: '+ this.name)
  }

  register(){
    console.log('====================================');
    console.log(this.name + ' is now registered');
    console.log('====================================');
  }

  payInvoice(){
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
  id: number;

  constructor(id:number, name:string, email:string, age:number){
    super(name, email, age);
    this.id = id;
  }

  payInvoice(){
    super.payInvoice()
  }
}


let mike: User = new Member(1, 'Mike Smith', 'mike@gmail.com', 33)
mike.payInvoice();