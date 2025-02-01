function foo(a, b) {
  // Input validation: Check if a and b are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error: throw new Error('Inputs must be numbers');
  } else if (a === 0 && b === 0) {
    return NaN; // Handle division by zero
  } else {
    return a / b; 
  }
}