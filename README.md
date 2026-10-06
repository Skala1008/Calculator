My Calculator
A from-scratch scientific and advanced calculator web application built with HTML, CSS, and Vanilla JavaScript.
This project is being developed as a learning project. The goal is not only to build a working calculator, but also to understand how calculators process expressions, operators, mathematical functions, different number systems, and advanced mathematical objects.
Development approach: No React, no backend, no calculator libraries, and no AI code-generation tools. Features are implemented step-by-step using Vanilla JavaScript.

1. Project Goals
The calculator is planned to grow from a basic calculator into a multi-purpose mathematical calculator supporting:
- Basic arithmetic
- Decimal calculations
- Operator precedence
- Brackets
- Scientific functions
- Trigonometry
- Degree/Radian modes
- Logarithms
- Powers and roots
- Fractions/reciprocal operations
- Complex numbers
- Vectors
- Matrices
- Base-n number systems
- Variables
- Equation solving
- Mathematical constants
The project will be developed incrementally rather than implementing everything at once.
2. Current Project Structure
calculator/
├── index.html
├── style.css
└── script.js
index.html
Contains the calculator structure and buttons.
style.css
Controls the layout, appearance, grid, spacing, buttons, display, and responsive styling.
script.js
Contains calculator logic, event listeners, expression processing, error handling, and future scientific/advanced functionality.
3. Current Features
Basic Calculator
Implemented
- Addition +
- Subtraction -
- Multiplication *
- Division /
- Equals =
- Clear AC
- Delete DEL
- Multiple operators
- Operator replacement
- Operator precedence for multiplication/division
- Division-by-zero error handling
- Error-state handling
- Basic display handling
Example
20 / 5 + 3
The calculator processes:
20 / 5 = 4
4 + 3 = 7
Result:
7
4. Expression Calculation
The calculator does not use JavaScript eval().
Instead, the current calculator processes an expression manually.
For example:
2 + 3 * 4
The expression is separated into:
Numbers
2
3
4
Operators
+
*
The calculator then processes multiplication/division first and addition/subtraction afterward.
Therefore:
2 + 3 * 4
becomes:
2 + 12
and finally:
14
This approach is useful because it teaches how an expression parser works.
5. Operator Handling
A reusable function has been introduced:
function addOperator(operator)
Its job is to handle all four arithmetic operators.
Instead of writing separate logic for every operator, the buttons call the same function:
+ → addOperator("+")
- → addOperator("-")
* → addOperator("*")
/ → addOperator("/")
Behavior
If the display is empty:
Do nothing
If the last character is already an operator:
5 + *
becomes:
5 *
If the expression ends with a number:
5
pressing + produces:
5+
This avoids repeated code.
6. Error Handling
The project uses:
let hasError = false;
A helper function is used:
function clearError()
When division by zero occurs:
10 / 0
the calculator displays:
Error: Division by zero
and sets:
hasError = true;
When the user starts entering a new number or operator, the error state is cleared.
This prevents situations such as:
Error: Division by zero89
7. JavaScript Concepts Learned
During development, the following concepts have been practiced:
DOM Selection
document.querySelector()
document.querySelectorAll()
Variables
const
let
Functions
function myFunction() {
}
Event Listeners
addEventListener("click", function () {
});
Arrays
const numbers = [];
Array Methods
map()
splice()
String Methods
split()
slice()
includes()
Regular Expressions
Used for identifying operators:
/[+\-*/]/
Conditional Logic
if
else if
else
Loops
for
Return Values
return
Boolean State
let hasError = false;
DOM Manipulation
display.value
8. Current Scientific Calculator Plan
The calculator will eventually have a scientific mode.
Trigonometry
Planned functions:
sin
cos
tan
cot
sec
cosec
With angle modes:
DEG
RAD
JavaScript's trigonometric functions use radians.
The reciprocal trigonometric functions can be calculated from the basic functions:
cot(x)   = 1 / tan(x)
sec(x)   = 1 / cos(x)
cosec(x) = 1 / sin(x)
The calculator should also handle undefined cases appropriately, such as:
tan(90°)
sec(90°)
cosec(0°)
cot(0°)
For degree mode:
radians = degrees × π / 180
Planned examples:
sin(30°) = 0.5
sin(π/2) = 1
9. Logarithms
Two logarithm functions are planned.
Natural Logarithm
ln(x)
Base:
e
JavaScript:
Math.log(x)
Example:
ln(e) = 1
Base-10 Logarithm
log(x)
JavaScript:
Math.log10(x)
Example:
log(100) = 2
10. Square Root
Planned function:
√x
JavaScript:
Math.sqrt(x)
Example:
√25 = 5
The calculator should also handle invalid real-number input such as:
√(-25)
with an appropriate error.
11. Powers
Planned functionality:
xʸ
Example:
2³ = 8
Possible JavaScript implementation:
Math.pow(2, 3)
or:
2 ** 3
The calculator should display the operation in a user-friendly form.
Important: JavaScript's ^ operator is not the normal exponent operator. It performs bitwise XOR.

12. Brackets
Planned:
(
)
Example:
(5 + 3) × 2
Result:
16
Brackets will require an improvement to the current expression parser because expressions inside brackets must be calculated before surrounding operations.
Example:
2 × (3 + 4)
should become:
2 × 7
and finally:
14
13. Decimal Numbers
Decimal support is currently being improved.
The calculator should allow:
12.5
and also:
12.5 + 7.8
The important rule is:
Check whether the current number already contains a decimal point, rather than checking whether the entire expression contains a decimal point.

For example:
12.5 + 7
The current number is:
7
so another decimal point should be allowed.
14. Planned Advanced Mathematics
The calculator is intended to go beyond a normal scientific calculator.
Complex Numbers
Planned support for:
a + bi
Examples:
3 + 4i
2 - 5i
Potential operations:
- Addition
- Subtraction
- Multiplication
- Division
- Conjugate
- Magnitude
- Argument
- Complex powers/functions
15. Vectors
Planned vector calculator.
Examples:
v = [1, 2, 3]
Possible operations:
- Vector addition
- Vector subtraction
- Scalar multiplication
- Dot product
- Cross product
- Magnitude
- Unit vector
Example:
[1,2,3] + [4,5,6]
16. Matrices
Planned matrix calculator.
Example:
[ 1  2 ]
[ 3  4 ]
Possible operations:
- Matrix addition
- Matrix subtraction
- Matrix multiplication
- Scalar multiplication
- Transpose
- Determinant
- Inverse
- Rank
- Identity matrix
- Solving systems of equations
Matrix dimensions should be validated before performing operations.
For example:
2×3 × 3×2
is valid.
But:
2×3 × 2×2
is invalid.
17. Base-n Number System
A programmer/base converter mode is planned.
Possible bases:
Binary  → Base 2
Octal   → Base 8
Decimal → Base 10
Hex     → Base 16
Eventually the calculator may support general:
Base-n
conversion.
Example:
Decimal 10
can become:
Binary: 1010
Octal: 12
Hexadecimal: A
The calculator may also support conversions between arbitrary supported bases.
18. Powers of 2 / 2ⁿ
Planned functionality for:
2ⁿ
This can be useful for:
- Binary calculations
- Computer science calculations
- Memory sizes
- Bit-related calculations
Examples:
2¹ = 2
2⁸ = 256
2¹⁰ = 1024
19. Reciprocal
Planned function:
1/x
Example:
1/4 = 0.25
The calculator should handle:
1/0
as an error.
20. Variables
A future variable system is planned.
Example:
x = 5
y = 10
Then:
x + y
should produce:
15
Possible features:
- Variable assignment
- Variable storage
- Variable replacement in expressions
- Multiple variables
- Clear variables
- Reuse variables across calculations
Example:
x = 10
y = 2
x² + y
Result:
102
21. Equation Solving
A future equation-solving mode is planned.
Examples:
Linear equation
2x + 5 = 15
Result:
x = 5
Another example
3x - 7 = 11
Result:
x = 6
Future versions may support:
- Linear equations
- Quadratic equations
- Multiple equations
- Systems of equations
- Variable-based expressions
22. Planned Modes
The calculator can eventually have multiple modes.
┌─────────────────────────────┐
│ Basic | Scientific | Converter │
└─────────────────────────────┘
Possible future modes:
Basic
Scientific
Converter
Complex
Vector
Matrix
Programmer
Equation Solver
Not all modes need to be implemented immediately.
23. Suggested Development Roadmap
Phase 1 — Basic Calculator
- [x] HTML structure
- [x] CSS calculator layout
- [x] Number buttons
- [x] Basic operators
- [x] AC
- [x] DEL
- [x] Equals
- [x] Operator replacement
- [x] Operator precedence
- [x] Division-by-zero handling
- [x] Reusable operator function
- [ ] Finish decimal handling
Phase 2 — Expression Engine
- [ ] Decimal numbers
- [ ] Brackets
- [ ] Better invalid-expression handling
- [ ] Negative numbers
- [ ] Power
- [ ] Root
- [ ] Reciprocal
- [ ] Percentage
Phase 3 — Scientific Calculator
- [ ] sin
- [ ] cos
- [ ] tan
- [ ] cot
- [ ] sec
- [ ] cosec
- [ ] DEG/RAD
- [ ] ln
- [ ] log
- [ ] π
- [ ] e
- [ ] x²
- [ ] xʸ
- [ ] 2ⁿ
- [ ] 1/x
Phase 4 — Advanced Mathematics
- [ ] Complex numbers
- [ ] Vectors
- [ ] Matrices
- [ ] Matrix determinant
- [ ] Matrix inverse
- [ ] Matrix multiplication
- [ ] Base-n conversion
Phase 5 — Variables & Equations
- [ ] Variables
- [ ] Variable storage
- [ ] Expression substitution
- [ ] Linear equations
- [ ] Quadratic equations
- [ ] Systems of equations
Phase 6 — UI/UX
- [ ] Basic/Scientific mode switching
- [ ] Converter mode
- [ ] Advanced mode selection
- [ ] Better error messages
- [ ] Keyboard support
- [ ] Responsive design
- [ ] Calculation history
- [ ] Dark/light theme
- [ ] Mobile-friendly layout
24. Important Design Principle
The project should remain understandable.
Do not immediately create one giant JavaScript file containing hundreds of lines of complicated code.
As the project grows, separate responsibilities logically.
For example:
Input handling
      ↓
Expression parser
      ↓
Calculator engine
      ↓
Scientific functions
      ↓
Advanced math
      ↓
Display/UI
This will make debugging much easier.
24. Learning Rules for This Project
This calculator is being built primarily as a learning project.
The development approach is:
1. Understand the concept.
2. Think about the algorithm.
3. Write the code independently.
4. Test it.
5. Find the bug.
6. Debug it.
7. Refactor repetitive code.
8. Only then move to the next feature.
The objective is not simply to obtain a working calculator.
The objective is to understand why the calculator works.
26. Current Technology Stack
HTML5
CSS3
Vanilla JavaScript
No frameworks are required.
No backend is currently required.
No external mathematical library is required for the planned core features.
27. Future Vision
The final goal is to turn this project into a multi-mode mathematical calculator capable of handling calculations ranging from simple arithmetic to advanced mathematical concepts.
The long-term feature set includes:
Basic Arithmetic
       ↓
Scientific Functions
       ↓
Expression Parsing
       ↓
Complex Numbers
       ↓
Vectors
       ↓
Matrices
       ↓
Number Systems
       ↓
Variables
       ↓
Equation Solving
This makes the project more than a simple calculator UI — it becomes a practical project for learning:
- JavaScript
- Algorithms
- Data structures
- Expression parsing
- Mathematical computation
- DOM manipulation
- State management
- Error handling
- Software design
