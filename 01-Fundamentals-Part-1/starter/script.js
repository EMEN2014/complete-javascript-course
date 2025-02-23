/*let js = "amazing";
      //if (js === 'amazing') alert('JavaScript is FUN!');

      //40 + 8 + 23 - 10;
      console.log(40 + 8 + 23 - 10);

      console.log('Jonas');
      console.log(23);

      let firstName = "Jonas"; // declaring a variable: firstName
      console.log(firstName);
      console.log(firstName);
      console.log(firstName);

      /**
       * A variable is a container for a value 
       * Variable name conventions
       * camelCase
       * only letters, numbers, underscore, dollar sign
       * reserved keywords not allowed as variable names e.g. new, function, delete, if, else, etc.
       * reserved keyword but allowed: name, _name, $name
       * uppercase variable names are used for constants e.g. PI, MY_BIRTHDAY not for variables
       * descriptive variable names, easy to understand
       */
      // let myFirstJob = 'Programmer';
      // let myCurrentJob = 'Teacher';

      // console.log(myFirstJob);
      // //Data Types
// /*
// Value is an Object or a primitive value that is assigned to a variable.
// Primitive data types: Number, String, Boolean, Undefined, Null, Symbol, BigInt
// - Number: Floating point numbers, used for decimals and integers (e.g. 3.14, -2020)
// - String: Sequence of characters, used for text (e.g. 'Jonas', "Jonas")
// - Boolean: Logical type that can only be true or false, used for making decisions (e.g. true, false)
// - Undefined: Value taken by a variable that is not yet defined ('empty value') - e.g. let children;
// - Null: Also means 'empty value' but is explicitly defined by the programmer (e.g. let children = null;)
// - Symbol (ES2015): Value that is unique and cannot be changed (e.g. const sym1 = Symbol('desc1');)
// - BigInt (ES2020): Larger integers than the Number type can hold (e.g. 9007199254740991n)
// #Dynamic Typing: We do not have to manually define the data type of the value stored in a variable. 
// JavaScript automatically figures out the data type while the code is being executed
// Primitive Data Types: Stored in the variable itself
// Value holds the data itself
// */
// //true;
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// //typeof operator is used to find the data type of a value
// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');

// //Dynamic Typing
// javascriptIsFun = 'YES!'; //reassigning the variable
// console.log(typeof javascriptIsFun);

// //Undefined is a data type and a value
// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// //Null is a data type and a value
// console.log(typeof null); //object - So, null is a primitive data type and the bug is still there for legacy reasons


/*let, const, var
*let: Declares a variable that can be reassigned
*const: Declares a variable that cannot be reassigned
*var: Declares a variable that can be reassigned, but it is an old way of declaring variables
*Variables declared with let and const are block-scoped
*Variables declared with var are function-scoped
*Best practice: Use const by default and let only when you are sure that the value of the variable will change
*/
// let age = 30;
// age = 31; //reassigning the variable - mutable

// const birthYear = 1991;
// // birthYear = 1990; //Uncaught TypeError: Assignment to constant variable.

// //const job; //SyntaxError: Missing initializer in const declaration

// var job = 'programmer';
// job = 'teacher';
// //not declaring a variable is a bad practice because it is not clear what the variable is used for
// lastName = 'Schmedtmann';
// console.log(lastName);

/*Operators
*operators are special symbols that perform operations on variables and values
*Arithmetic operators: +, -, *, /, **, %, ++, --
*Assignment operators: =, +=, -=, *=, /=, **=, %=
*Comparison operators: >, <, >=, <=, ==, ===, !=, !==
*Logical operators: &&, ||, !
*typeof operator: returns the data type of a value
*/
// //Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// // const ageJonas = 2037 - 1991;
// // const ageSarah = 2037 - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName); //string concatenation - space is added between the two strings using ' '

// //Assignment operators
// let x = 10 + 5; //15 - x = 15
// x += 10; //x = x + 10 = 25
// x *= 4; //x = x * 4 = 100
// x++; //x = x + 1 = 101
// x--; //x = x - 1 = 100
// x--; //x = x - 1 = 99
// console.log(x);

// //Comparison operators
// console.log(ageJonas > ageSarah); // > greater, < less, >= greater equal, <= less equal
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

/*
*Operator Precedence
*Precedence: Order of operations
*Associativity: Order in which operators are executed in the case of the same precedence
*Operator precedence determines the order in which operators are executed
*Higher precedence wins
*list of operators in order of precedence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*Math operators have higher precedence than comparison operators
*/
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); //subtraction has higher precedence than comparison

console.log(25 - 10 - 5); //left-to-right associativity

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10, y = 10 - right-to-left associativity

const averageAge = (ageJonas + ageSarah) / 2; //parentheses have higher precedence than division
console.log(ageJonas, ageSarah, averageAge);

