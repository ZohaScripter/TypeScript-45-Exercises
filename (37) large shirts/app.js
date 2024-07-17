function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("Sze of the shirt is ".concat(size, " with a printed message of ").concat(message));
}
//calling function with by default values
make_shirt();
//calling function with diff values
make_shirt(undefined, "I love JS");
