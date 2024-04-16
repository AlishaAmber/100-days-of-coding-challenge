// Question25: Alien colors #1: Imagine an Alien was just shot down in a game.
// Assign 'green', 'yellow', or 'red' to a variable called alien_colors
// version that passes;
let alien_colors = "green";
if (alien_colors == "green") {
    console.log("You just earned 5 points!");
}
//version that fails (no output);
alien_colors = "red";
if (alien_colors == "green") {
    // output because the condition is fail
}
// Questio26: Alien colrs #2: Choose a color for an alien, then write an if-else chain
// version that runs the if blocks;
alien_colors = "green";
if (alien_colors == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points.");
}
// version that runs the else blocks;
alien_colors = "yellow";
if (alien_colors == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points.");
}
// Question27: Alien colors #3; Convert your if-else chain to handle three
// colors: green,yellow,and red.
// green alien version;
alien_colors = "green";
if (alien_colors == "green") {
    console.log("You earned 5 points.");
}
else if (alien_colors == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_colors == "red") {
    console.log("You earned 15 points.");
}
// yellow alien version;
alien_colors = "yellow";
if (alien_colors == "green") {
    console.log("You earned 5 points.");
}
else if (alien_colors == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_colors == "red") {
    console.log("You earned 15 points.");
}
// red alien version;
alien_colors = "red";
if (alien_colors == "green") {
    console.log("You earned 5 points.");
}
else if (alien_colors == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_colors == "red") {
    console.log("You earned 15 points.");
}
export {};
