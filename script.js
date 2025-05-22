function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	// Initialize an empty string to build the Roman numeral
  let roman = "";
  // Loop through each symbol-value pair
  symbols.forEach((item) => {
    // Destructure the array to get the symbol and its value
    const [symbol, value] = item;
    // While the current number is greater than or equal to the current value
    while (num >= value) {
      // Add the corresponding Roman numeral symbol to the result
      roman += symbol;
      // Subtract the value from the number
      num -= value;
    }
  });
  // Return the complete Roman numeral string
  return roman;


}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
console.log(convertToRoman(14)); // XIV
console.log(convertToRoman(798)); // DCCXCVIII

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));

// // do not edit below this line
module.exports = convertToRoman;
// console.log(convertToRoman(36));

