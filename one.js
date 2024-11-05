/* 
STEPS:
1. Iterate the string
2. If the character is an opening bracket("(", "{", "[") -> push onto stack
3. If the character is a closing bracket (")", "}", "]") -> 
    a. check the (peek) the last element in the stack
    b. if the c(the cclosing bracket) matches the last item in the stack, pop element from stack and 
    c. if they don't match -> return false and done
4. If we make it though the entire string,
    a. stack length is 0, return true

Corner Cases
- single character -> false 
- empty -> true

Pre-Check
- if length is odd return false
*/

function validBrackets(bracketString) {
  // JS array stack - similar stack API
  const stack = [];
  // create arrays opening/closing brackets - compair
  const openingBrackets = ["(", "{", "["];
  const closingBrackets = [")", "}", "]"];

  // loop bracketString - validate
  for (let i = 0; i < bracketString.length; i++) {
    // current character
    const currentChar = bracketString[i];
    // current character / opening bracket...
    if (openingBrackets.includes(currentChar)) {
      stack.push(currentChar);
      // check for a match
    } else if (closingBrackets.includes(currentChar)) {
      const match = openingBrackets[closingBrackets.indexOf(currentChar)];
      if (stack.length === 0 || stack.pop() !== match) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

const string1 = "[]";
console.log(validBrackets(string1));

const string2 = "{{[]}";
console.log(validBrackets(string2));

const string3 = "{{}}[]]";
console.log(validBrackets(string3));
