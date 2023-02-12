class Person {
  constructor(firstName, lastName, age, area, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.area = area;
    this.email = email;
  }
  getDetails() {
    return `The name of the person is ${this.firstName} ${this.lastName}.
        Age: ${this.age} 
        area:${this.area}
        email:${this.email}`;
  }
}

let a = new Person("sathish", "Mani", "26", "covai", "ishumani@gmail.com");
let b = new Person("ranjani", "F", "21", "chennai", "monisha@gmail.com");
let c = new Person("vonothini", "A", "22", "cuddalore", "geetha@gmail.com");
console.log(a.getDetails());
console.log(b.getDetails());
console.log(c.getDetails());
