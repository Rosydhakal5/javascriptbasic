// <------------------Object Oriented Programming------------------------>
//Encapsulation 
//Abstract
//Inheritance 
//polymorphism 

class Person{
    constructor(fullName, myAge){
        this.name = fullName;
        this.age = myAge;
    }
    readBio(){
        console.log("this is my name", this.name, "this is my age", this.age)
    }
}

const person1 = new Person("Rosy", 23);
person1.readBio();

const person2 = new Person("Patsey", 28);
person2.readBio();

const person3 = new Person("apple", 3000)
person3.readBio();

//<--- if we write this. something in child it takes whatever is there in its parents value---->

const person5 = {
    name: "Rosy Dhakal",
    age: 23,
    address: "KTM",
    readBio: function(){
        console.log("this is my name", this.name, "and my age is", this.age);
    },

    //In arrow function this refers to the globalTHIS
    // so its better to refer directly the object name and access the details 
    readName: () => {
        console.log("this is my name", person5.name)
    },
    completeBio: () =>{
        return "My name is"+ person5.name + "i live in "+ person5.address
    }

}
person5.readBio();
person5.readName();
console.log(person5.completeBio())


//Inheritance 
//extend is a reserve keyword that help us to read details from another
//
class Student extends Person{
    //gets called when creating an object
    constructor(fullName, age){
        super(); //if we don't provide this it will throw an error due to adding 
        //constructor in the class,  super here is parent which is person, so we are 
        //bascially forwarding it to parent
        this.type = "student"
    }
}
    const student1  = new Student("Rihana", 20)
    student1.readBio();
class Employee extends Person{}
const Employee1 = new Employee("Peter", 3)
Employee1.readBio();
