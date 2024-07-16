//3.Implement a higher-order function debounce that takes a function and a delay, 
//returning a new function that limits the rate at which the original function can be invoked.

function debounce(func, delay) {
    
  
    return function( timeoutId, ...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  
  debounce (console.log('Hello'), 10);
