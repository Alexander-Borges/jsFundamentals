let tortilla = "soft corn tortilla";
let protein = "tinga chicken";
let cheese = "cotija cheese";
let toppings = ["lettuce", "pico de gallo","guacamole"];

let taco1 = {
    "tortilla": "soft corn tortilla",
    "protein": "tinga chicken",
    "cheese": "cotija cheese",
    "toppings": ["lettuce", " pico de gallo"," guacamole"]
}

console.log("Tortilla: " + taco1.tortilla);
console.log("Protein: " + taco1.protein);
console.log("Cheese: " + taco1.cheese);
console.log("Toppings: " + taco1.toppings);

console.log("=====================================")

let taco2 = {
    "tortilla": "soft corn tortilla",
    "protein":  "tinga chicken",
    "cheese":   "cotija cheese",
    "toppings": ["lettuce", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + this.tortilla);
        console.log("Protein:  " + this.protein);
        console.log("Cheese:   " + this.cheese);
        console.log("Toppings: " + this.toppings);
    }
}
    
// we can now still get all the delicious taco facts by
taco2.tacoInfo(); // note tacoInfo still gets called like a function
