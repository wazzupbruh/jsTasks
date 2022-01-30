/** Task: 1
 * implement factorial algorithm using for, while, do..while operators
 * assign the result to corresponding variable
 * for -> forFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * while -> whileFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * do..while -> doFactorial: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while
 */
let forFactorial = 1, whileFactorial = 1, doFactorial = 1;
const n = 10;

for(let i = n; i > 1; i--){
  forFactorial *= i;
}

let i = n + 1;
while(i > 1){
  i--;
  whileFactorial *= i;
}

i = n + 1;

do{
  i--;
  doFactorial *= i;
}while(i > 1);

/** Task: 2
 * return the concatenated string from an array of substring
 * assign the result to variable 'str'
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */
let str;
const substr = ["I", " love", " JS"];

str = substr.join('');

/** Task: 3
 * calculate a total of income of certain person
 * assign the result to the variable 'totalIncome'
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 */
let totalIncome;
const personIncomes = {
  salary: 1985,
  rent: -600,
  interestOnDeposit: 250,
  otherExpences: -300
};

totalIncome = Object.values(personIncomes).reduce((a, b) => a + b);

module.exports = {
  forFactorial,
  whileFactorial,
  doFactorial,
  str,
  totalIncome
};