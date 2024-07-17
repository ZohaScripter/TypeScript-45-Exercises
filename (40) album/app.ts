function make_album(artistName:string, album_title:string, tracks?:number){
    let album: {artist: string, title: string, tracks?:number}={
        artist: artistName, 
        title: album_title, 
    };

    if(tracks!==undefined){
        album.tracks = tracks;
    }

    return album;
}

let album1 = make_album("Atif Aslam", "Kahaniyan")
let album2 = make_album("Nabeel Shoukat", "Lamhey", 8)
let album3 = make_album("Sahir Ali", "ost", 34)

console.log(album1);
console.log(album2);
console.log(album3);
