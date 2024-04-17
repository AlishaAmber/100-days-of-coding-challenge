// \Question40: Album;

interface Album {

    artist:string,
    title:string,
    tracks?:number,
};

function make_album(artist: string, title: string, tracks?: number):Album {
    let album: Album = {
        artist:artist,
        title:title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

let album1 = make_album("atif aslam", "pehli dafa");
let album2 = make_album("arjit singh", "O maahi");
let album3 = make_album("ali zafar", "mushk",22);

console.log(album1);
console.log(album2);
console.log(album3);

    
