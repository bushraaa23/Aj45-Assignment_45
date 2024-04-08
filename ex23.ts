//conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

//let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")

//console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.



let car : string = 'Subaru';

// test 1 equality comperision true

console.log("Is car == 'subaru'? I predict true");
console.log(car == 'subaru');


// test 2 strict equality comparison true

console.log("Is car === 'subaru'?I predict true");

console.log(car === 'subaru');


// test 3 strict equality comparison true

console.log("Is car != 'subaru'? ?i predict false");
console.log(car != 'subaru');



// test 4 strict inequality comparison false

console.log("Is car !== 'subaru'?I predict false");
console.log(car !== 'subaru');


// test 5 less than comparison false

console.log("Is car < 'subaru'?I predict false");
console.log(car < 'subaru');


// test 6 greater than comparison false


console.log("Is car > 'subaru'?I predict false");
console.log(car > 'subaru');

// test 7 lees than equal comparison true

console.log("Is car <= 'subaru'?I predict false");
console.log(car <= 'subaru');

// test 8 greater than equal comparison true

console.log("Is car >='subaru'?I predict false");
console.log(car >= 'subaru');

// test 9 checking truthinless true

console.log("Is car ?I predict true");
console.log(car);

// test 10 checking falseless false

console.log("Is car ?I predict false");
console.log(!car);