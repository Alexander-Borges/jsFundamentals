let isSunny = false;
let isRaining = true;

if(isSunny) {
    console.log("Wear Sunscreen");
}

if(isRaining) {
    console.log("Bring an umbrella");
}

let today = new Date();
if(today.getDay() == 1) {
    console.log("I hate Mondays!");
} else if(today.getDay() == 5) {
    console.log("Friday? More like Fri-yay!");
} else {
    console.log("Today is alright!");
}

let temperature = 60;
let currentlyRaining = false;

if(temperature >= 50) {
    if(!currentlyRaining) {
        console.log("This is a good day to go for a walk!")
    }
}