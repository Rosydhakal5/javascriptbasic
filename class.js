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
        console.log("this is my name", this.name)
    }
}

const person1 = new Person("Rosy", 23);
person1.readBio();


