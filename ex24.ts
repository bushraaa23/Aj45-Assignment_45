//More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. Have at least one True and one 
//False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than
// or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array





let car: string = "subaru";
let age1: number = 25;
let numbers : number[] = [1, 2, 3, 4]

// string test

// test 1 equality true


console.log("Is car == 'Subaru'? I predict True.");

console.log(car == 'Subaru '); // true case sensitive

// test 2  strict equality false

console.log("Is car === ;Subaru'? I predict false.");

console.log(car === 'Subaru'); // false (case sensitive)


// test 3 inequality true

console.log("Is car != 'Toyota'? I predict True.");

console.log(car != 'Toyota ');

//test 4 inequality false

console.log("Is car !== Subaru'? I predict false.");

console.log(car !== 'Subaru'); 



// test 5 lowercase conversion true



console.log("Is car.toLowerCase()== 'Subaru'? I predict true.");
console.log(car.toLowerCase() == 'Subaru'); 


//test 6 lowercase conversion false


console.log("Is car === car.toLowerCase()?I predict false.");
console.log(car === car.toLowerCase()); 



// numerical test true

// test 7 equality true

console.log("Is age1 == 25? I predict true.");
console.log(age1 == 25 ); // true

// test 8 Inequality false


console.log("Is age1 != 30? I predict false.");
console.log(age1 != 30 ); // false

// test 9 greater than  false

console.log("Is age > 30? I predict false");
console.log(age1 > 30); // false


// test 10 less than or equal true

console.log("Is age <= 25? I predict false.");
console.log(age1 <= 25);


// test 11 AND true


console.log("Is age > 20 && < 30? I predict true.");
console.log(age1 > 20 && age1 < 30);


// test 12  or false

console.log("Is age > 30 || age < 18? I predict false.");
console.log(age1 > 30 || age1 < 18);


//  In Array test

// test 13 in array true


console.log("Is 3 in numbers? I predict true");
console.log(3 in numbers); // true negation of " in" operator

// test in array false

// test 14 not in array

console.log("Is 5 not in numbers? I predict true");
console.log(5 ! in numbers); // true negation of " in" operator

