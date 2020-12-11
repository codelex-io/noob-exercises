/**
 * Write a function that returns the name property value of the given object.
 * 
 * Example
 * 
 * Input: 
 * { 
 *  name: "Sherlock",
 *  age: 34
 * }
 * 
 * Output: "Sherlock"
 */

function getName(input: Person) { }

export { getName };

interface Person {
    name: string;
    age: number;
}