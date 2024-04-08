//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.



let guestlists : string[] = ["Ayesha", "Wajiha", "Maheen"];

// print the name who cant make dinner

let unableAttend: string | undefined = guestlists.splice(1,1)[0];

console.log(`${unableAttend} not invited for dinner;`);

// push
guestlists.push("Bushra Arshad");

// print message

guestlists.forEach(guest => {
console.log(`Dear ${guest}, you are cordially invited`);
});

export{guestlists}

