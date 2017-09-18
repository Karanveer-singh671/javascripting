var numbers = [1,2,3,4,5,6,7,8,9,10];
var filtered = numbers.filter(function evenNumbers(numbers){
	return numbers % 2 == 0;
});
console.log(filtered);
// array numbers
// filter variable is the array of numbers and then name a function 
//even numbers (filters to even numbers taking in the numbers array to filter that return new array filtering  using the equation)
// print filtered array