function make_car(manufacturer:string, model:string, ...options){
    //making an object
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(option =>{
        let [Key, value] = option.split(":")
        car[Key.trim()]= value.trim();
});
return car
}
let new_car = make_car("Honda", "Civic", "Color: Grey", "Year:2024")
console.log(new_car);
