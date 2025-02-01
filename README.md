# Unhandled Non-Number Input in Division Function

This repository demonstrates a common JavaScript bug: unexpected behavior when a function performing division receives non-number inputs. The `foo` function in `bug.js` does not properly handle cases where `a` or `b` are not numbers, resulting in potential errors or unexpected outputs.

The solution in `bugSolution.js` addresses this by adding input validation to ensure that `a` and `b` are numbers before performing the division. This prevents errors and makes the function more robust.

## How to Reproduce

1. Clone the repository.
2. Open `bug.js` and `bugSolution.js`.
3. Run `bug.js` with various inputs, including numbers and non-numbers, to observe the unexpected behavior. 
4. Run `bugSolution.js` with the same inputs to see the improved handling of non-number inputs.
