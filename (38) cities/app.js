function describe_city(country, city) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city(undefined, "Karachi");
describe_city(undefined, "Lahore");
describe_city("Japan", "Tokyo");
