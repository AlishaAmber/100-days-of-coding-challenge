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
export {};
