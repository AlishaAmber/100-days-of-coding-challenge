//Question41: Magicians;
let magicians = ["Criss", "David", "Ricky", "James"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
//Question42: Great magicians;
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); // modifies the original array
show_magicians(magicians); // show modified names
export {};
