# Learning Practice: Introduction to Testing with TypeScript

## Topics

- `Jest`

## Learning Objectives

- Create tests using `Jest`
- Identify testing objectives
- Distinguish between root cause, error, defect, and failure

## Resources

- [Jest documentation](https://jestjs.io/docs/getting-started)
- [Getting Started with ts-jest](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation)

## Deliverables

### 0. Set Up

- Create a project folder, verify that Node.js is installed, create a Node project, install `Jest`, `ts-jest`, and TypeScript, create the Jest config, create a `tsconfig.json` file, verify the installation, take a screenshot of your terminal showing that `Jest` is installed, and save it in the `screenshot` folder.

## Step 1: Review the Code

## Step 2: Import Functions and `Jest`

- Import `test` and `expect` from `@jest/globals`, import the functions from `src/functions.ts`.

## Step 3: Write Your First Tests for `isEven`

- Write a test for `isEven` that checks whether an even number returns `true`, write a test for `isEven` that checks whether an odd number returns `false`, and run the tests with `npx jest` to confirm they are working.

## Step 4: Write Tests for `palindrome`

- Write a test for `palindrome` using a palindrome, write a test for `palindrome` using a word that is not a palindrome, and run the tests with `npx jest` to confirm they are working.

## Step 5: Write Tests for `countVowels`

- Write a test that correctly identifies the number of vowels in a word containing vowels, write a test that correctly identifies `0` vowels in a word without vowels, and run the tests with `npx jest` to confirm they are working.

## Step 6: Break a test

- Break one of your tests so it fails, take a screenshot and put it in the screenshot folder, and run the tests with `npx jest` to confirm you broke a test.

## What to Submit

1. Create and initialize a new GitHub repository.
2. Commit and push your work to the repository.
3. Make sure the repository is public. Private repositories will not receive credit.
4. Submit the GitHub repository URL on Canvas.

## AI Transparency

AI was used to clean up and refactor this file.
note: El removed/consolidated content as they went through the walkthrough
