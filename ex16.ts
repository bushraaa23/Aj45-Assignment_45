//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program 
//informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add 
//one new guest to the end of your list. • Print a new set of invitation messages, 
//one for each person in your list.



let guest_list : string [] = ['farhan', 'raza', 'ayesha', 'bisma']


console.log(('Great News we found a bigger table'));

 guest_list.unshift("Bilal");

 guest_list.splice(Math.floor(guest_list.length/2),0, "Bushra");

guest_list.push("cheetah")

 console.log(guest_list);

 guest_list.forEach(guest => {
         console.log(`Dear ${guest}, you are cordially invited to dinner`);
    
 });

