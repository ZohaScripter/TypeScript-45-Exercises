function make_shirt (size: string = "large", message: string = "I love Typescript"){
    console.log(`Sze of the shirt is ${size} with a printed message of ${message}`);
}
//calling function with by default values
make_shirt();
//calling function with diff values
make_shirt( undefined, "I love JS")