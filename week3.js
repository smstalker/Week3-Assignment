//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3,9,23,64,2,8,28,93]; 

  //  a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
  //            (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
  // const first = ages[0];
  // const last = ages[ages.length - 1];
  // console.log (last - first);


//  b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
// ages.push(6);
// const first = ages[0];
// const last = ages[ages.length - 1];
// console.log (last - first); 
 

//  c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.

// let sum = ages.reduce(myFunction);

// function myFunction(total, value) {
//   return total + value;
// }
// var avg = sum / ages.length;
// console.log (avg); 

// //2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
 let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; 

// // a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

// const letters = names.map (question2Function);

// function question2Function(value, index, array){

//   return value.length; 
// }

// let sum = letters.reduce(myFunction);

// function myFunction(total, value) {
//   return total + value;
// }
// var avg = sum / letters.length;
// console.log (avg); 

// //  b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
// console.log (names.join(" "))

//3.	How do you access the last element of any array?
    //console.log (names[names.length -1]); 

//4.	How do you access the first element of any array?
    //console.log (names [0]); 

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//     For example:
//    namesArray = ["Kelly", "Sam", "Kate"] //given this array
//    nameLengths = [5, 3, 4] //create this new array
// const nameLengths = names.map (question5Function);

// function question5Function(value, index, array){

//   return value.length
// }
// console.log (nameLengths);

// //6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
// let secondSum = nameLengths.reduce (question6function);
// function question6function (total, value) {
//   return total + value
// }
// console.log (secondSum);

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//       (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).


//function seventhFunction(word, n){

//  let result = word.repeat(n);
//  console.log(result);
// }
// seventhFunction ('Hola', 5); 

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name 
//            (the full name should be the first and the last name separated by a space).

//  function fullName(firstName, lastName) {
//     let nameResult = firstName + " " + lastName;
//     console.log (nameResult); 
//   }
// fullName ("Peter", "Parker");

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers = [12, 6, 4, 36, 20, 33, 55]

// let sum = numbers.reduce(myFunction);
  function myFunction(total, value, index, array){
   return total + value; 
 }
//  console.log (sum); 
//  if (sum >100) {
//    console.log ('true')
//  }

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
// function avgFunction(numbers, sum){
//  console.log(sum /numbers.length);
//   }

// avgFunction(numbers, sum);

//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the 
//    average of the elements in the second array.
// firstNumbers = [6, 19, 4, 92, 8]
// let firstSum = firstNumbers.reduce(myFunction);
// var firstAvg = firstSum / firstNumbers.length;
// secondNumbers = [43, 14, 3, 22]
// let secondSum = secondNumbers.reduce(myFunction); 
// var secondAvg = secondSum / secondNumbers.length; 
// console.log (firstAvg);
// console.log (secondAvg);
// function greaterAvg(firstAvg, secondAvg){
//  console.log (firstAvg > secondAvg); 
// }
// greaterAvg (firstAvg,secondAvg);



//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside 
//            and if moneyInPocket is greater than 10.50.
// function willBuyDrink (isHotOutside, moneyInPocket){
//   if (isHotOutside == true && moneyInPocket > 10.50)
//   result = 'true'

//   else (result = "false");
//   console.log (result)
// }
// willBuyDrink(true, 9);
// willBuyDrink(false, 12);
// willBuyDrink(true, 15);

//13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
//A company needs to track average miles driven per day on company owned vehicles for budget tracking purpaoses. 
// This function will display miles driven given a beginning mileage and ending mileage and an average miles per number of days driven

// function mileageFunction(beginningMiles, endingMiles, daysDriven){
  

//   avgMiles = (endingMiles - beginningMiles)/daysDriven;

//   console.log('You have driven', (endingMiles - beginningMiles), 'in',daysDriven, 'days. Which is', avgMiles, "per day.");

// } 

// mileageFunction(43750, 47540, 20);
