# Issue Log

ROOT CAUSE: See Issue 1. The author did not understand the difference between variable assignment and key:value pairs in Objects. The resulting ERROR is on line 17 where author attempts to assign function inputs to object keys as though the object keys were (undeclared) variables. DEFECT: `addItem` cannot mutate `ITEMS` grocery list. This results in a FAILURE where a core program requirement (adding an item to a grocery list) cannot be met because the `addItem` function will not run.

FAILURE: 
## Issue 1
- **Location:** Line 17
- **Issue:** Incorrect Object `key:value` syntax 
- **Explanation:** The equals operator assigns a value to the lefthand side of the statement, however these are not meant to be JavaScript statements, but values assigned to keys.
- **Suggested Fix:** Replace "=" with ":" for the key `name` and allso `price`
- **Status:** Fixed

## Issue 2
- **Location:** Line 12
- **Issue:** Dangling comma
- **Explanation:** This comma is doing nothing, and also adds length to our list without adding additional content
- **Suggested Fix:** Delete the comma and the line so that ITEMS is length of 4
- **Status:** Fixed

## Issue 3
- **Location:** Line 16-25
- **Issue:** Inconsistent coding practices
- **Explanation:** The function `addItem` has no return value, however the `deleteItem` function returns `ITEMS`.
- **Suggested Fix:** Determine whether we need to return anything from either of these functions, or will a console.log suffice? (Grocery list display is not part of the requirements)
- **Status:** Fixed

## Issue 4
- **Location:** Line 16-19
- **Issue:** No error handling
- **Explanation:** The function `addItem` has no error handling to prevent incorrect values or edge cases from being added to `ITEMS`
- **Suggested Fix:** Add logic to check for falsey values as a condition for pushing to `ITEMS`
- **Status:** TBD

## Issue 5
- **Location:** Line 23
- **Issue:** Incorrect Array item removal
- **Explanation:** `ITEMS.pop()` removes the last element in an Array, however requirements state we delete items, and this can be done by matching the name parameter to a key
- **Suggested Fix:** Consider using a different Array prototype method, such as `splice()`
- **Status:** TBD

## Issue 6
- **Location:** Line 22
- **Issue:** Incorrect parameter handling
- **Explanation:** Instead of passing our `name` reference to a string, we are literally passing "name" as a string
- **Suggested Fix:** Remove quotes from "name" in the `indexOf()` method
- **Status:** TBD

## Issue 7
- **Location:** Line 24
- **Issue:** Extra return statement
- **Explanation:** We return ITEMS from `deleteItem`, but not from `addItem`.
- **Suggested Fix:** Make these consistent. Neither function is called elsewhere in the code, so perhaps a console.log will suffice
- **Status:** TBD

## Issue 8
- **Location:** Line 28
- **Issue:** Hardcoded number of iterations in `for...of` condition
- **Explanation:** If our grocery list has a mutable length, a hard-coded number (3) of `for...in` loops does not help us achieve total calculation
- **Suggested Fix:** Fix the `for...of` control flow statement by replacing `3` with `ITEMS.length`
- **Status:** TBD

## Issue 9
- **Location:** Line 29
- **Issue:** Missing variable declaration
- **Explanation:** `total` is not declared anywhere
- **Suggested Fix:** Declare teh variable `total`, and use `let` since this is mutated in the for...of statement
- **Status:** TBD

## Issue 10
- **Location:** Lines 16-19
- **Issue:** No error handling
- **Explanation:** There is no error handling in the function `addItem`
- **Suggested Fix:** Add error handling to `addItem` to guard against incorrect inputs
- **Status:** TBD

## Issue 11
- **Location:** Lines 21-25
- **Issue:** No error handling
- **Explanation:** There is no error handling in the function `deleteItem`
- **Suggested Fix:** Add error handling to `deleteItem` for items not found in list, such as a `console.log` that communicates the "name" string is not in the list
- **Status:** TBD

## Issue 12
- **Location:** Lines 34-37
- **Issue:** No error handling
- **Explanation:** There is no error handling in the function `tax`
- **Suggested Fix:** Add error handling to `tax` to guard against incorrect inputs for `taxRate`, such as a negative number
- **Status:** TBD

## Issue 13
- **Location:** Lines 27-32
- **Issue:** Sub-optimal data handling
- **Explanation:** The function `total` would be more robust if we passed the `ITEMS` array for validation
- **Suggested Fix:** Add logic to pass the `ITEMS` array and add validation and error handling
- **Status:** TBD

## Issue 14
- **Location:** Lines 35, 47
- **Issue:** Update alongside `Issue 13`
- **Explanation:** The function `total` needs to be passed `ITEMS` parameter
- **Suggested Fix:** Update these function calls to match changes from `Issue 13`
- **Status:** TBD

## Issue 15
- **Location:** Line 47
- **Issue:** Function reference instead of invocation
- **Explanation:** We are printing the function object itself instead of its return value in our `Subtotal` log
- **Suggested Fix:** The function `total` needs to be called and passed `ITEMS` parameter
- **Status:** TBD

## Issue 16
- **Location:** Line 34, 35
- **Issue:** Missing parameter ( match changes from `Issue 13`)
- **Explanation:** Need to pass `ITEMS` to the `tax` function which calls `total`
- **Suggested Fix:** The function `total` needs to be called and passed `ITEMS` parameter, which means we need to add it to line 34 as well as 35
- **Status:** TBD

## Issue 17
- **Location:** Lines 34-37
- **Issue:** No error handling
- **Explanation:** Is the paramater taxRate a valid number? Need to handle edge cases like negative numbers or 0. `taxRate` needs to be a type that can concatenate with a function call.
- **Suggested Fix:** Add error handling in the function body to ensure `taxRate` is an expected value. It may be helpful to ensure that `total` returns a number by calling `Number()`, and that `taxRate` is also a number, to avoid type coercion into `String` values.
- **Status:** TBD

## Issue 18 
- **Location:** Line 35
- **Issue:** Tax rate not calculated
- **Explanation:** A `taxRate` is passed into the function, and then this rate is added to the return from the function call `total()`. 
- **Suggested Fix:** Multiply the return from `total` by the taxRate instead of concatenating these values.
- **Status:** TBD

## Issue 19
- **Location:** Lines 27, 42
- **Issue:** nitpick: "i" reads as a reference to `index`
- **Explanation:** This code runs, however for readability change `i` to `items` or `e` (for array "element") to improve readability. 
- **Suggested Fix:** Change `i` to `items`
- **Status:** TBD

## Issue 20
- **Location:** Line 48, 49
- **Issue:** Typo: no closing backtick
- **Explanation:** These lines cannot produce string interpolation because there is no closing backtick. 
- **Suggested Fix:** Replace lone double-quote with closing backtick. This typo is repeated, so catch it at teh end of line 48 and also at the end of line 49.
- **Status:** TBD

## Issue 21
- **Location:** Lines 48, 49
- **Issue:** Missing parameter validation
- **Explanation:** `taxRate` is passed in, and we print whatever the user passes in so long as it is a number. We need validation so that we are not printing wrong values, such as negative numbers. 
- **Suggested Fix:** Add validation before printing the receipt. Return early if `taxRate` is invalid, and add a console log for the user to indicate the issue.
- **Status:** TBD

## Issue 22
- **Location:** Line 49
- **Issue:** Transposed functions
- **Explanation:** `String()` is called inside the `tax` function on `taxRate`. `taxRate` needs to be a number in order for the `tax` function to return a valid value. 
- **Suggested Fix:** Make `tax(taxRate)` an argument of the `String()` method.
- **Status:** TBD

## Issue 23
- **Location:** Line 42
- **Issue:** Single quotes instead of backticks
- **Explanation:** Single quotes prevent String Interpolation
- **Suggested Fix:** Replace the single quotes with backticks so our `for...of` statement prints correctly
- **Status:** TBD

## ESLint issues:
1. error  'name' is defined but never used  (refer to Issue #5)
2. error  'idx' is assigned a value but never used (refer to Issue #6)
3. error  'i' is assigned a value but never used NEW ISSUE #23

(ADDITIONAL ISSUES DISCOVERED DURING CORRECTIONS)
- `indexOf` does not work well for Arrays of Objects. Switched to `findIndex` method to search by Object Property
- Removed "+" from `Tax:...` and `Total:...` lines of receipt as this looks more like failed concatenation than correct printout