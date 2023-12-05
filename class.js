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
    readBio: function(){
        console.log("this is my name", this.name, "and my age is", this.age);
    }
}
person5.readBio();