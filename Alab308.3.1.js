console.log("Part 1: Fizz Buzz")

//Accomplish the following:

//Loop through all numbers from 1 to 100.
for (let i = 1; i <=100; i++){

//If a number is divisible by both 3 and 5, log “Fizz Buzz.”
if(i % 3 == 0 && i % 5 == 0) {
    console.log(i + " Fizz Buzz.");
} 

//If a number is divisible by 3, log “Fizz.”
else if(i % 3 == 0) {
    console.log(i + " Fizz");

}
        
//If a number is divisible by 5, log “Buzz.”
    else if(i % 5 == 0){
        console.log(i + " Buzz");

    }

//If a number is not divisible by either 3 or 5, log the number.
    else {
        console.log(i);
    }
    

}

console.log("Part 2: Prime Time")
//Write a script that accomplishes the following:
//Declare an arbitrary number, n.
//Create a loop that searches for the next prime number, starting at n and incrementing from there.
//As soon as you find the prime number, log that number and exit the loop.
//Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. 















