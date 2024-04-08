//uest List: If you could invite anyone, living or deceased, to dinner,
// who would you invite? Make a list that includes at least three people you’d 
//like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//foreach 
// Define array of guest
let guest_list = ["Ayesha", "Wajiha", "Maheen, ali"];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Maam' + guest_list[i] + ',\n We invited you on dinner tomorrow.\n\nThank you');
}
export { guest_list };
// Invite each guest for dinner
//  guestlist.forEach(guest => {
//      console.log(`Dear ${guest}, you are cordially invite to dinner`);
//  }) ;
//  // map()
//  // invite guest
//  let invitation : string [] =guestlist.map(guest => `Dear ${guest}, you are cordially invite to dinner`);
//  console.log(invitation);
//  invitation.forEach(invitations => {
//      console.log(invitation);
//  });
