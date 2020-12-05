# Array Functions

**⚠️ NO LOOPS ALLOWED - everything must be solved by using array functions**

## Exercise #1

Input: Array of elements

```javascript
["h", "o", "l", "a"];
```

Output: String with comma delimited elements of the array in the same order.

```javascript
"h,o,l,a";

```

## Exercise #2

Make an array of numbers that are doubles of the first array.

```javascript
function doubleNumbers(arr) {
  // your code here
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
```

## Exercise #3

Take an array of numbers and make them strings.

```javascript
function stringItUp(arr) {
  // your code here
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
```

## Exercise #4

Capitalize each of an array of names.

```javascript
function capitalizeNames(arr) {
  // your code here
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
```

## Exercise #5

Make an array of strings of the names.

```javascript
function namesOnly(arr) {
  // your code here
}

console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
```

## Exercise #6

Make an array of the names in `h1`s, and the ages in `h2`s.

```javascript
function readyToPutInTheDOM(arr) {
  // your code here
}
console.log(
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
```

## Exercise #7

You get an array of numbers, return the sum of all of the positives ones.

Example:

```javascript
[1, -4, 7, 12]; // => 1 + 7 + 12 = 20
```

## Exercise #8

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example:

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

## Exercise #9

Complete the square sum function so that it squares each number passed into it and then sums the results together.

Example:

```javascript
[1, 2, 2]; // => 1^2 + 2^2 + 2^2 = 9.
```

## Exercise #10

Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:

```javascript
[4, 3, 9, 7, 2, 1]; // => [2,9,3,49,4,1]
```

If the number has an integer square root, take this, otherwise square the number.

The input array should not be modified!

## Exercise #11

We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

```javascript
arr(5); // => [0,1,2,3,4]
```

## Exercise #12

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

```javascript
348597; // => [7,9,5,8,4,3]
```

## Exercise #13

Turn an array of numbers into a total of all the numbers.

```javascript
function total(arr) {
  // your code here
}

console.log(total([1, 2, 3])); // 6
```

## Exercise #14

Turn an array of numbers into a long string of all those numbers.

```javascript
function stringConcat(arr) {
  // your code here
}

console.log(stringConcat([1, 2, 3])); // "123"
```

## Exercise #15

Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

```javascript
function fiveAndGreaterOnly(arr) {
  // your code here
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
```

## Exercise #16

Given an array of numbers, return a new array that only includes the even numbers.

```javascript
function evensOnly(arr) {
  // your code here
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
```

## Exercise #17

Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

```javascript
function fiveCharactersOrFewerOnly(arr) {
  // your code here
}
// test
console.log(
  fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])
); // ["by", "dog", "wolf", "eaten"]
```

## Exercise #18

Turn an array of voter objects into a count of how many people voted.

```javascript
function totalVotes(arr) {
  // your code here
}

const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
console.log(totalVotes(voters)); // 7
```

## Exercise #19

Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once.

```javascript
function shoppingSpree(arr) {
  // your code here
}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist)); // 227005
```

## Exercise #20

Given an array of arrays, flatten them into a single array

```javascript
function flatten(arr) {
  // your code here
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
```

## Exercise #21

Given an array of potential voters, return an object representing the results of the vote

Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

```javascript
const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function voterResults(arr) {
  // your code here
}

console.log(voterResults(voters)); // Returned value shown below:

{
    numYoungVotes: 1,
    numYoungPeople: 4,
    numMidVotesPeople: 3,
    numMidsPeople: 4,
    numOldVotesPeople: 3,
    numOldsPeople: 4
}
```

## Exercise #22

Write a new function called swapCase that takes a string of words and capitalizes every second word starting from the first one.

```javascript
const swapCase = function (string) {
  // Codeeeee
};

swapCase("hey gurl, lets javascript together sometime"); // => "HEY gurl, LETS javascript TOGETHER sometime"
```

## Exercise #23

Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the alphabet by one.

Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use Ascii code to acomplish this.

```javascript
const shiftLetters = function (string) {
  // code!
};

shiftLetters("hello"); // => 'ifmmp'
shiftLetters("abcxyz"); // => "bcdyz{"
```

## Exercise #24

Write a function that takes a string and returns an object representing the character count for each letter.

```javascript
const countLetters = function (string) {
  // your code here
};

countLetters("abbcccddddeeeee"); // => {a:1, b:2, c:3, d:4, e:5}
```

## Exercise #25

Write a function that takes a string and a target, and returns true or false if the target is present in the string.

```javascript
const isPresent = function (string, target) {
  // GO GO GADGET CODE!
};

isPresent("abcd", "b"); // => true
isPresent("efghi", "a"); // => false
```

## Exercise #26

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example:

```javascript
[
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
```

The correct answer would be 17.

## Exercise #27

Can you find the needle in the haystack?

Write a function `findNeedle()` that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

```javascript
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) => // should return "found the needle at position 5"
```

## Exercise #28

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

Example:

```javascript
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]); // => 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]); // => 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]); // => 16
checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]); // => 0
```

## Exercise #29

Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

```
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep] (YOU ARE HERE AT THE FRONT OF THE QUEUE)
7 6 5 4 3 2 1
```

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Examples:

```javascript
warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]) ===
  "Oi! Sheep number 1! You are about to be eaten by a wolf!";
warnTheSheep(["sheep", "sheep", "wolf"]) ===
  "Pls go away and stop eating my sheep";
```

## Exercise #30

You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example:

```javascript
monkeyCount(10); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1); // => [1]
```
