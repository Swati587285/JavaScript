//map()- is used when we want to transform every element of an array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.map((num=> num * 2)));                        //[ 2, 4, 6, 8, 10 ]
console.log(numbers);                                             //[ 1, 2, 3, 4, 5 ]

//Example2
const word = ['hello', 'world'];
const reversed = word.map(word =>
  word.split('').reverse().join('')
);
console.log(reversed);          //[ 'olleh', 'dlrow' ]

//Example3- Check palindrome using map()
const words = ['madam', 'hello', 'level', 'world', 'racecar'];
const result = words.map(word => {
  const reversed = word.split('').reverse().join('');

  return {
    word: word,
    isPalindrome: word === reversed
  };
});
console.log(result);
/*[
  { word: 'madam', isPalindrome: true },
  { word: 'hello', isPalindrome: false },
  { word: 'level', isPalindrome: true },
  { word: 'world', isPalindrome: false },
  { word: 'racecar', isPalindrome: true }
] */

//filter()- used when we want to select certain elements based on a condition
const numbers1 = [1, 2, 3, 4, 5, 6];
const result1 = numbers1.filter((num) => {
  return num % 2 === 0;
});
console.log(result1);                           //[ 2, 4, 6 ]

//Example2- Filter words ending with a particular letter
const words1 = ['cat', 'dog', 'bat', 'car', 'hat'];
const res = words1.filter(word => word.endsWith('t'));
console.log(res);           //[ 'cat', 'bat', 'hat' ]

//Example3- Filter words by length
const words2 = [
  'cat',
  'elephant',
  'dog',
  'javascript',
  'car'
];
const result0 = words2.filter(word => word.length > 4);
console.log(result0);       //[ 'elephant', 'javascript' ]

//reduce()- used when we want to combine all elements into one final value
const numbers2 = [10, 20, 30, 40];
const result2 = numbers2.reduce((total, num) => {
  return total + num;
});
console.log(result2);                               //100

//Using all 3
const numbers3 = [1, 2, 3, 4, 5, 6];
const result3 = numbers3
  .filter(num => num % 2 === 0)
  .map(num => num * 2)
  .reduce((sum, num) => sum + num, 0);
console.log(result3);                                   // 24


//An object is primarily used to represent an entity with properties.
const user1 = {
  name: 'Swati',
  age: 25
};
console.log(user1.name);        //Swati
console.log(user1['age']);      //25
console.log(user1);             //{ name: 'Swati', age: 25 }

//A Map is primarily used when you need a collection of key-value pairs.
const user = new Map();
user.set('name', 'Ritu');
user.set('age', 25);
console.log(user.get('name'));    //Ritu
console.log(user.get('age'));     //25
console.log(user);                //Map(2) { 'name' => 'John', 'age' => 25 }


