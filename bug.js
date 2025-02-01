function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; //This will cause unexpected behavior if a and b are not numbers 
  } else {
    return a / b; 
  }
}