// Part 1: Variables and Conditionals
let userInput = prompt("Enter a number:");
let message;

if (userInput > 10) {
    message = "The number is greater than 10.";
} else {
    message = "The number is 10 or less.";
}
console.log(message);

// Part 2: Custom Functions
function calculateSquare(num) {
    return num * num;
}

function greetUser(name) {
    return `Hello, ${name}!`;
}

// Part 3: Loops
for (let i = 0; i < 5; i++) {
    console.log(`This is loop iteration number ${i + 1}`);
}

let count = 0;
while (count < 3) {
    console.log(`Count is: ${count}`);
    count++;
}

// Part 4: DOM Interactions
document.getElementById("calculateBtn").addEventListener("click", function() {
    const result = calculateSquare(userInput);
    document.getElementById("output").innerText = `The square of ${userInput} is ${result}.`;
});
