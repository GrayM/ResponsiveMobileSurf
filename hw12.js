/**
 * PART 1
 *
 * Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
 */

var side1 = 5;
var side2 = 6;
var side3 = 7;

var sempi = (side1 + side2 + side3) / 2;


var areaOfTriangle = function(side1, side2, side3) {
	return Math.sqrt(sempi*(sempi-side1)*(sempi-side2)*(sempi-side3));
	console.log(areaOfTriangle);
}

//******** AreaOfTriangle(5, 6, 7); **********

/**
 * PART 2
 *
 * Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
 * [ Formula : c/5 = f-32/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]
 *
 * Expected Output :
 * 60°C is 140 °F
 * 45°F is 7.222222222222222°C
 */

var toCelsius = function(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

//******** toCelsius(45)*******

var toFahrenheit = function(celsius) {
	return celsius * (9/5)+32;
}

//***** toFahrenheit(60)*********

/**
 * PART 3
 *
 * Write a JavaScript function that reverse a number.
 *
 * Example x = 32243;
 * Expected Output : 34223
 */

var rev =  function(input) {
	var rev1 = (""+input).split("");
	rev2 = rev1.reverse();
	rev3 = rev2.join("");
	return parseFloat(rev3);
}

/**
 * PART 4
 *
 * Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
 *
 * Sample array : myColor = ["Red", "Green", "White", "Black"];
 *
 * Expected Output :
 * "Red,Green,White,Black"
 * "Red,Green,White,Black"
 * "Red+Green+White+Black"
 */

var arr = ["Red", "Green", "White", "Black"];
var colors = arr.join('-');
console.log(colors);

var colors2 = arr.join('+');
console.log(colors2);

/**
 * PART 5
 *
 * Write a JavaScript program to compute the sum and product of an array of integers.
 */

var numSet = [43, 67, 63, 38, 35, 21, 21];
var a = "numSet";
var sum = function(a) {
return (a[1] + a[2]);
}
var sumA = sum(a);
console.log(sumA);
//-IDK!


