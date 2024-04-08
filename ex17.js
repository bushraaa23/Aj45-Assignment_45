//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a 
//message saying that you can invite only two people for dinner.
// print  message
let guest_list = ['farhan', 'raza', 'ayesha', 'bisma'];
console.log("unfortunately! the new dinner table wont arrive so we can invite only 2 guest");
guest_list.unshift("alice", "bob");
// print message update list
console.log("update list of guest:", guest_list);
//remove guest from the list
while (guest_list.length > 2) {
    let removedGuest = guest_list.pop();
    if (removedGuest !== undefined) {
        console.log(`sorry, ${removedGuest}, we cant invite you`);
    }
}
guest_list.forEach(guest => {
    console.log(`Dear ${guest}, you both are invited for the dinner`);
});
//remove 2 name from the list
guest_list.splice(0, guest_list.length);
// print undatedempty list
console.log("updated list of guest:", guest_list);
export {};
