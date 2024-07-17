function make_album(artistName, album_title, tracks) {
    var album = {
        artist: artistName,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Atif Aslam", "Kahaniyan");
var album2 = make_album("Nabeel Shoukat", "Lamhey", 8);
var album3 = make_album("Sahir Ali", "ost", 34);
console.log(album1);
console.log(album2);
console.log(album3);
