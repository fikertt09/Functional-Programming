//1.Implement a curried function that calculates the volume of a rectangular prism. 
//Then use it to create a partially applied 
//function that calculates the volume for a specific height.

const calculateVolume = (length) => (width) => (height) => length * width * height;

const calculateVolumeForHeight = (height) => calculateVolume(5)(10)(height);

console.log(calculateVolumeForHeight(3)); // Output: 150
