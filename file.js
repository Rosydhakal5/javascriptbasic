//ES6 features

//Let const 
//template literals
// const name = "rosy"
// const add = "sydney"

// console.log("Hi my name is ", name + " i am from", add);
// const info = `
// Hi my name is ${name} and i am from ${add}`
// console.log(info);

//---------Arrow Function---------------
//create call invoke ()
// function add(a, b){
// // console.log("adding some data")
// return a+b;
// }


// const result = add(5, 6);
// console.log(result)
// ;

// const add = (a, b) => {
//     return a + b
// }

// const result = add( 3, 8);
// console.log(result);

//loops

//for loops
//Looping array 
// for (let i = 10; i > 0; i--){
//     console.log(i);
// }


// let i = 0;
// while(i < 10){
//     console.log(i++);
// }

// let i = 0;
// do{
//     console.log(i++);
// } while(i < 0);



// let i = 0;
// while (i < 10){
//     console.log(i++);
// }


// let i = 0;
// while (i <10){
//     console.log(i++)
//  if(i===5){
//     break;
// }
// }



// let i = 0;
// while (i < 10){
//     i++;
//     if(i % 2 === 0){
//         console.log(i + "this is even");
//         continue;
//     }
// }



//data manipulation 

// Number 
// pareseint, float 

// safe number = - 2 ^ 53 - 1 to 2 ^ 53 - 1 

// const num = 234_567_893_434_345_985_234;
// console.log(num);

// const number = "49.2323s"

// const value = parseFloat(number);
// console.log(typeof value, number )
// console.log(value);
// //NaN => Not a Number 
// //isNan 

// const ans = number * 5;
// console.log(ans);
// if(isNaN(ans)){
//     console.log("invalid amount");
// }


//string 
//declaring
// const str = "Hi, \"i'm rosy"
// console.log(str);


// const str = " Hi, I am rosy and i live in sydney "
// const val = str.toUpperCase();
// const val = str.toLowerCase();
// const val = str[ ];
// const val = str.lastIndexOf("i");
// const val = str.replaceAll("i", "u");
//print rest of the value from the substring number
//if you give (2, 3) in substring both index are counted from o positon
// const val = str.substring(2, 8);
// const val = str.slice(2, -2); - counts backwards
// const val = str.includes("rosy") 
// const val = str.search("rosy")
// const val = str.charAt(6);
// const val = str.split("i");
// const val  = str.trim();

// console.log(val, val.length);



//Array 


// const fruits = new Array();
// console.log(fruits);

// const fruits = ['apple', 'banana', 'apple', 'mango', 'kiwi','cherry']
// console.log(fruits);
// console.log(fruits[2]);
// console.log(fruits.length);

// fruits [3] = 'pineapple';
// fruits [5] = 'gava';
// console.log(fruits.length-1);
// fruits[0] = 'strawberry'
// fruits[fruits.length]= 'cherry';
// //add last element 
// fruits.push('sugarcrane')
//rmoving last item
// fruits.pop();
//includes itself and deletes the numbers afterwards like first element and 3items gone
// fruits.splice(0, 3);
//removing and adding 
// fruits.splice(2 ,2 ,'passionfruit', 'apple', 'cherry', 'cherry1', 'dsds');
// fruits.splice()

// const veg = ['onion', 'onion', 'onion','onion']

// console.log(fruits);
// console.log(...veg);


//first element----> remove-------------->

// fruits.shift();

//first element----> remove and add-------------->
// fruits.unshift('graepes', 'pomig','graepes', 'pomig','graepes', 'pomig');
// fruits.splice(1, 0, 'apppli');
// console.log(fruits.indexOf('apple'));
// console.log(fruits);

// const veg = ['onion', 'onion', 'onion','onion']

// const add = fruits.concat(veg);
// console.log(fruits, veg, add);



//---------------------->mutating ARRAY< ----------------------
//const fruits = ['apple', 'banana', 'apple', 'mango', 'kiwi','cherry'];
//  newFruits.pop();
// console.log(newFruits);
// console.log(fruits);

// const address = "rockdale"; 
// let  myAddress = address;
// myAddress = "hurstville"
// console.log(address, myAddress);


// const phoneNumber = [1, 2, 3, 4];
// console.log(...phoneNumber);
 
// console.log(fruits);
// console.log(...fruits)

// const newFruits = [...fruits];
// newFruits.unshift('berries');
// console.log(newFruits);
// console.log(fruits);





// /---------------------->checking array or not < ----------------------
// const roll = [];
// console.log(roll.length > 0);


//---------->Write a loop for fruits to make all Uppercase< ----------------------
const fruits = ['apple', 'banana', 'apple', 'mango', 'kiwi','cherry'];
let uppercaseFruits = [];
for (let i = 0; i<(fruits.length); i++){
//     const newFruits = (fruits.toUpperCase);

    console.log(fruits[i].toUpperCase());
    let uppercaseFruits = [];
    uppercaseFruits.push(fruits[i].toUpperCase());}
console.log(uppercaseFruits);

// for each will print until there is next element 
fruits.forEach(element =>{
    console.log(element);
})

//---------------------MAP--------------------->
//it returns new array, where original array is not affected but its exceptional 
//like calling an API
const  mappedFruits = fruits.map(fruit =>{
    // console.log("this is printed from the map", fruit);
    //we can also write it removing curly braces and
    //return in single line for single statement
    return fruit.toUpperCase();
})
console.log(mappedFruits);


const rollNumbers = [233, 443, 232, 235, 234, 546]
const newRolls = rollNumbers.map(element => element +1)
console.log(newRolls);
//----------------------includes----------------------
//when you want to check if the item exists or not

console.log(fruits.includes('apple'));
fruits.forEach(element =>{
    console.log(element)
})


//----------------------filter, every, some---------------------
console.log(fruits.every(element => element.length > 5));

//some 
console.log(fruits.some(element => element.includes('a')));


console.log(fruits.some(element => {
    return element.includes('a')}));
//--------UNDERSTANDING pseudo--------------//
//array.some/every(anyname =>{
// return anyname.includes ('a');
// })

//filter (it returns the value)
const filteredFruits = fruits.filter(element => element.length > 5);
let letterIncludes = fruits.filter(element => element.includes('a'));
console.log(filteredFruits, letterIncludes);

//find (it doesnt return array )
const filteredFruit = fruits.find(element => element.length > 5);
console.log(filteredFruit)

//slice 
//reduce
