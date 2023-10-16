//Always Hungry
//Write a function that is given an array and each time the value is "food" it should console.log "yummy". if "food" was not present in the array console log "I'm hungry" once.
function alwaysHungry(arr) {
    let foundFood = false;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "food") {
            console.log("yummy");
            foundFood = true;
        }
    }

    if(!foundFood) {
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

console.log("===============================================")

//High Pass Filter
//Given an array and a value cutoff. return a new array containing only the values larger than cutoff. 

function highPass(arr, cutoff) {
    let filteredArr = [];
    
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}
let result = highPass([6,8,3,10,-2,5,9],5);
console.log(result); //we expect back [6,8,10,9]

console.log("===============================================")
//Better than average 
//Given an array of numbers return a count of how many of the numbers are larger than the average
function betterThanAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    //calculate the average
    let average = sum / arr.length;

    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }
    }
    //count how many values are greater than the average
    return count;
}
let results = betterThanAverage([6,8,3,10,-2,5,9])
console.log(results)

console.log("===============================================")

//Array Reverse
// Write a reverse function that will reverse the values an array and return them
function reverse(arr) {
    let reversedArray = [];
    for (let i = arr.length -1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

let result2 = reverse(["a", "b", "c", "d", "e"]);
console.log(result2); // we expect back ["e", "d", "c", "b", "a"]

//Fibonacci Array
// Write a function that will return an array of Fibonacci numbers up to a given length n. Fibonacci numbers are calculated by adding the last two values in the sequence together. So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5. 
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    let fibArr = [0, 1];
    
    for (let i = 2; i < n; i++){
        let nextFib = fibArr[i - 1] + fibArr[i - 2];
        fibArr.push(nextFib);
    }

        return fibArr;
}

var result3 = fibonacciArray(10);
console.log(result3); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
