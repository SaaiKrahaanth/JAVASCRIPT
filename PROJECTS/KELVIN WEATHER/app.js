/*The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.

The value saved to kelvin will stay constant.
*/
const kelvin=0;

/* 
Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.

Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius. */
const celsius=kelvin-273;


// Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.

// fahrenheit = Math.floor(celsius * (9/5) + 32

const fahrenheit=Math.floor(celsius*(9/5)+32);
console.log(fahrenheit);