// \Question40: Album;
;
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("atif aslam", "pehli dafa");
let album2 = make_album("arjit singh", "O maahi");
let album3 = make_album("ali zafar", "mushk", 22);
console.log(album1);
console.log(album2);
console.log(album3);
export {};
