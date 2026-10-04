import { test, expect } from "@jest/globals";
import { isEven, add, divide, palindrome, countVowels, findMax, removeDuplicates } from "../src/functions";

test("the function `isEven` returns true on even numbers", () => {
    let num = isEven(4);
    expect(num).toBeTruthy();
    expect(num).toBe(true);
});
test("the function `isEven` returns false on odd numbers", () => {
    let num2 = isEven(5);
    expect(num2).toBeFalsy();
    expect(num2).toBe(false);
});

test("the function `palindrome` returns true if the input string is a palindrome", () => {
    let myPal = "racecar";
    expect(palindrome(myPal)).toBe(true);
});
test("the function `palindrome` returns false if the input string is not a palindrome", () => {
    let myPal2 = "something";
    expect(palindrome(myPal2)).toBe(false);
});

test("the function `countVowels` returns the number of vowels contained in the input string", () => {
    expect(countVowels("book")).toEqual(2);
});
test("the function `countVowels` returns the number 0 if no vowels are in the input string", () => {
    expect(countVowels("grrrrrr")).toEqual(0);
});
//duplicate last test to break it:
test("the function `countVowels` returns the number 0 if no vowels are in the input string", () => {
    expect(countVowels("grrrrrr")).toEqual(1);
});