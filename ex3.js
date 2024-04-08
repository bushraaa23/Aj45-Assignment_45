//Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.
// name cases
let personName = "Bushra Arshad";
// in lowerCase
console.log("lowerCase:", personName.toLowerCase());
// in uppperCase
console.log("upperCase:", personName.toUpperCase());
// in tittlecase
console.log("titleCase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
export {};
