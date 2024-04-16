// Question16: More guests: 
let guests = ["Jessica", "Nataliya", "Tisca", "Liza"];
console.log("Great news! I found a bigger lunch table!");
// Adding more guests;
guests.unshift("Jenifer");
guests.splice(guests.length / 2, 0, "Aliya");
guests.push("Natasha");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for lunch?`);
});
// Question17: Shrink guest list: 
console.log("Unfortunately, I can only invite two people for lunch.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to lunch`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to lunch.`);
});
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
export {};
