// Question18: Seeing the world:
let places = ["Thiland", "Switzerland", "Saudia Arabia", "Iran", "Iraq"];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reversed alphabetical order:", places);
export {};
