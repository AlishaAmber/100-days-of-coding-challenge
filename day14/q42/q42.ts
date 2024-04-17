//Question41: Magicians;

let magicians: string[] = ["Criss", "David", "Ricky", "James"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician =>{
        console.log(magician);
        
    })
}
show_magicians(magicians)

//Question42: Great magicians;
function make_great(magicians: string[]) {
    for(let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); // modifies the original array
show_magicians(magicians); // show modified names