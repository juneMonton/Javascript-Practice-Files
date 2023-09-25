//A while loop lets you repeat code while a certain condition is true.

// let number=1;

// while(number <=5){
//     console.log(number);
//     number++;
// }

// // //For loop

// let number;
// for (number = 1; number <= 5; number++) {
//   console.log(number);
// }

// let letter = "";
// while (letter !== "X") {
//   letter = prompt("Type a letter or X to exit:");
// }

// //Ultimately, choosing which loop to use depends on context. All loops can be written with while, but if you know in advance how many times you want the loop to run, for is the best choice.

// // While loop
// while (condition) {
//     // Code to run while the condition is true
//   }
  
//   // For loop
//   for (initialization; condition; final expression) {
//     // code to run while the condition is true
//   }

// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
// let num=1;
// while(num<50||num>100){
//     num=prompt("Enter a number between 50 to 100: ");
// }

// let word="";
// while (word!=="yes" && word!=="no"){
//     word=prompt("Enter any word: ");
// }

function fizzBuzz(num){
    for(let i=1;i<=num;i++){
        if(i%3===0 && i%5===0){
            console.log("FizzBuzz")
        }else if(i%3===0){
            console.log("Fizz")
        }else if(i%5===0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}

fizzBuzz(100)