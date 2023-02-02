/*
You are given a non-negative floating point number rounded 
to two decimal places celsius, that denotes the temperature in Celsius.
You should convert Celsius into Kelvin and Fahrenheit
and return it as an array ans = [kelvin, fahrenheit].
*/

var convertTemperature = function (celsius) {
  let kelvin = celsius + 273.15;
  let fahrenheit = celsius * 1.8 + 32.0;
  let ans = [kelvin, fahrenheit];
  return ans;
};
