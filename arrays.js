let monLunch = 12.88;
let metroFareReload = 44.50;
let monDinner = 34.29;
let tueCoffee = 5.83;
let tueLunch = 10.00;

let total = monLunch + metroFareReload + monDinner + tueCoffee + tueLunch

let purchasesWeekFeb15 = [
    12.88,
    44.50,
    34.29,
    5.83,
    10.00,
];

//if we want to find the first purchase we need to remember that we can access the values in the array with their index.
console.log("The first purchase cost: $" + purchasesWeekFeb15[0]);

let numberOfPurchases = purchasesWeekFeb15.length;
console.log(numberOfPurchases)

let lastPurchaseValue = purchasesWeekFeb15[numberOfPurchases-1];
console.log("the last purchase cost: $" + lastPurchaseValue);

let weeklySpend = 0;
for(let i=0; i<purchasesWeekFeb15.length; i++){
    weeklySpend += purchasesWeekFeb15[i];
}
console.log("The total spent weekly was $" + weeklySpend);