//2.Write a pure function that takes a nested array and flattens it. Ensure the original array remains unchanged.

function flattenArray(arr) {
    return arr.reduce((result, item) => {
      return result.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
  }
 
  const nestedArray = [1, [2, 3], [4, [5, 6]]];
  const flatArray = flattenArray(nestedArray);
  console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]
