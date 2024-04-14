// Question14: Guest list and invitation;
let guests = ["Rabia", "Tayyaba", "Tuba"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for lunch?`);
});
// Question15: Changing guest list; one of guests can't make it to the luch, so need to
// send out a new set of invitation with a replacement guest.
let unableToAttend = "Tayyaba";
console.log(`${unableToAttend}can't make it to luch.`);
// Replace the guest
let newGuest = "Maria";
guests[guests.indexOf(unableToAttend)] = newGuest;
//New invitation
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for lunch?`);
});
export {};
